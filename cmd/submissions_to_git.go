package cmd

import (
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/example/leetcode-github/pkg/schema"
	"github.com/example/leetcode-github/pkg/services"
	"github.com/example/leetcode-github/pkg/utils"
	"github.com/spf13/cobra"
	"gopkg.in/yaml.v3"
)

func init() {
	rootCmd.AddCommand(submissionToGitCmd)
	submissionToGitCmd.Flags().StringVarP(&csrftoken, "csrftoken", "c", "", "csrftoken to use in request")
	submissionToGitCmd.Flags().StringVarP(&LEETCODE_SESSION, "leetcode-session", "s", "", "leetcode session to use in request")
}

var extensions = map[string]string{
	"javascript": "js",
	"golang":     "go",
	"python":     "py",
	"python3":    "py",
	"typescript": "ts",
}

func generateSolutions(submissions []services.SubmissionData) {
	set := map[string]bool{}

	for _, v := range submissions {
		folderPath := fmt.Sprintf("solution/%d %s/%s/", v.QuestionId, v.Title, v.Lang)

		// if folder path already exist in map, ignore
		if !set[folderPath] && v.StatusDisplay == "Accepted" {
			// create nested folders
			utils.CreateAllFolders(folderPath)

			// if language not in the extensions use txt
			extension, ok := extensions[v.Lang]
			if !ok {
				extension = "txt"
			}

			// generate the file name and write in the file
			fileName := fmt.Sprintf("solution/%d %s/%s/index.%s", v.QuestionId, v.Title, v.Lang, extension)
			utils.WriteInFile(fileName, []byte(v.Code))

			set[folderPath] = true
		}
	}
}

func publishInGit() {
	git := utils.NewGit()
	git.PushAllChanges()

}

func storeLastExecutionDate(date time.Time) {
	utils.CreateFolders(".store")

	secrets := schema.ConfigContent{
		LastSubmissionDate: date.Unix(),
	}

	secretsYaml, err := yaml.Marshal(&secrets)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fileName := ".store/config.yml"

	utils.WriteInFile(fileName, secretsYaml)
}

func getLastExecutionDate() *time.Time {
	lastExecutionDate := utils.GetKeyInYmlFile(".store/config.yml", "lastSubmissionDate")
	var lastExecutionDatePtr *time.Time
	n, err := strconv.ParseInt(lastExecutionDate, 10, 64)
	if err != nil {
		fmt.Println("Warning during conversion:", err)
		lastExecutionDatePtr = nil
	} else {
		t := time.Unix(n, 0)
		lastExecutionDatePtr = &t
	}
	return lastExecutionDatePtr
}

var submissionToGitCmd = &cobra.Command{
	Use:   "submissions-to-git",
	Short: "Get all submission in leetcode and push to git",
	Run: func(cmd *cobra.Command, args []string) {
		leetcodeService := services.NewLeetcodeService(csrftoken, LEETCODE_SESSION)
		lastExecutionDate := getLastExecutionDate()
		submissions := leetcodeService.GetAllSubmitted(lastExecutionDate)
		generateSolutions(submissions)
		storeLastExecutionDate(time.Unix(submissions[0].Timestamp, 0))
		publishInGit()

	},
}
