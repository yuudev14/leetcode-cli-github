package cmd

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/example/leetcode-github/internal/config"
	"github.com/example/leetcode-github/pkg/utils"
	"github.com/spf13/cobra"
)

type SubmissionData struct {
	Id            int `json:"id"`
	QuestionId    string
	Lang          string
	LangName      string
	Time          string
	Timestamp     int
	Status        int
	StatusDisplay string
	Runtime       string
	Url           string
	IsPending     string
	Title         string
	Memory        string
	Code          string
	CompareResult string
	TitleSlug     string
	HasNote       bool
	FlagType      int
	FrontendId    int
}

// {
// 	"id": 1604440035,
// 	"question_id": 3,
// 	"lang": "python3",
// 	"lang_name": "Python3",
// 	"time": "16 hours, 10 minutes",
// 	"timestamp": 1744455880,
// 	"status": 10,
// 	"status_display": "Accepted",
// 	"runtime": "16 ms",
// 	"url": "/submissions/detail/1604440035/",
// 	"is_pending": "Not Pending",
// 	"title": "Longest Substring Without Repeating Characters",
// 	"memory": "17.8 MB",
// 	"code": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        hash_map = set()\n        \n        max_length = 0\n        L = 0\n\n        for R in range(len(s)):\n            while s[R] in hash_map:\n                hash_map.remove(s[L])\n                L += 1\n            hash_map.add(s[R])\n            max_length = max(max_length, len(hash_map))\n        return max_length\n",
// 	"compare_result": "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
// 	"title_slug": "longest-substring-without-repeating-characters",
// 	"has_notes": false,
// 	"flag_type": 1,
// 	"frontend_id": 574
// }

var csrftoken string
var LEETCODE_SESSION string
var offset int16
var limit int16

func init() {
	rootCmd.AddCommand(submissionCmd)
	submissionCmd.Flags().StringVarP(&csrftoken, "csrftoken", "c", "", "csrftoken to use in request")
	submissionCmd.Flags().StringVarP(&LEETCODE_SESSION, "leetcode-session", "ls", "", "leetcode session to use in request")
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
			fmt.Println("Error reading response")
			os.Exit(1)
		}

		fmt.Println(resp.StatusCode, string(body))

	},
}
