package cmd

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/example/leetcode-github/internal/config"
	"github.com/example/leetcode-github/pkg/utils"
	"github.com/fatih/color"
	"github.com/spf13/cobra"
)

type SubmissionApiResponse struct {
	SubmissionsDump []SubmissionData `json:"submissions_dump"`
}

type SubmissionData struct {
	Id            int    `json:"id"`
	QuestionId    int    `json:"question_id"`
	Lang          string `json:"lang"`
	LangName      string `json:"lang_name"`
	Time          string `json:"time"`
	Timestamp     int    `json:"timestamp"`
	Status        int    `json:"status"`
	StatusDisplay string `json:"status_display"`
	Runtime       string `json:"runtime"`
	Url           string `json:"url"`
	IsPending     string `json:"is_pending"`
	Title         string `json:"title"`
	Memory        string `json:"memory"`
	Code          string `json:"code"`
	CompareResult string `json:"compare_result"`
	TitleSlug     string `json:"title_slug"`
	HasNote       bool   `json:"has_notes"`
	FlagType      int    `json:"flag_type"`
	FrontendId    int    `json:"frontend_id"`
}

var csrftoken string
var LEETCODE_SESSION string
var offset int16
var limit int16

func init() {
	rootCmd.AddCommand(submissionCmd)
	submissionCmd.Flags().StringVarP(&csrftoken, "csrftoken", "c", "", "csrftoken to use in request")
	submissionCmd.Flags().StringVarP(&LEETCODE_SESSION, "leetcode-session", "s", "", "leetcode session to use in request")
	submissionCmd.Flags().Int16VarP(&offset, "offset", "o", 0, "offset of the submitted")
	submissionCmd.Flags().Int16VarP(&limit, "limit", "l", 20, "limit of the submitted")
}

var submissionCmd = &cobra.Command{
	Use:   "submissions",
	Short: "Get all submission in leetcode",
	Run: func(cmd *cobra.Command, args []string) {
		url := fmt.Sprintf("%s?offset=%d&limit=%d", config.Config.Urls.LeetcodeSubmissions, offset, limit)
		client := &http.Client{}

		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			fmt.Println("Error: ", err)
			os.Exit(1)
		}

		utils.SetLeetcodeCookies(req, csrftoken, LEETCODE_SESSION)

		resp, err := client.Do(req)

		if err != nil {
			fmt.Println("Error: ", err)
			os.Exit(1)
		}

		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			fmt.Println("Error reading response", err)
			os.Exit(1)
		}

		var responseData SubmissionApiResponse

		if err := json.Unmarshal(body, &responseData); err != nil {
			fmt.Println("Error when deserializing response data", err)
			os.Exit(1)
		}

		// fmt.Println(resp.StatusCode, responseData)

		for _, v := range responseData.SubmissionsDump {
			d := color.New(color.FgCyan, color.Bold)
			x := d.Sprintf("This prints bold cyan %v\n", v)
			c := color.New(color.FgCyan).Add(color.Underline)
			println(x, c.Sprintf("This prints bold cyan %v\n", v))

		}
	},
}
