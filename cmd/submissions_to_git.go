package cmd

import (
	"fmt"

	"github.com/example/leetcode-github/pkg/services"
	"github.com/example/leetcode-github/pkg/utils"
	"github.com/spf13/cobra"
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

var submissionToGitCmd = &cobra.Command{
	Use:   "submissions-to-git",
	Short: "Get all submission in leetcode and push to git",
	Run: func(cmd *cobra.Command, args []string) {
		leetcodeService := services.NewLeetcodeService(csrftoken, LEETCODE_SESSION)

		// Note: Enhancement, store last scanned date in .secrets folder. anywhere to avoid waiting too long
		submissions := leetcodeService.GetAllSubmitted()
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

		git := utils.NewGit()

		git.PushAllChanges()
	},
}
