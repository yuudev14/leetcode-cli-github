package cmd

import (
	"fmt"
	"time"

	"github.com/example/leetcode-github/pkg/services"
	"github.com/fatih/color"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(submissionCmd)
	submissionCmd.Flags().StringVarP(&csrftoken, "csrftoken", "c", "", "csrftoken to use in request")
	submissionCmd.Flags().StringVarP(&LEETCODE_SESSION, "leetcode-session", "s", "", "leetcode session to use in request")
}

var submissionCmd = &cobra.Command{
	Use:   "submissions",
	Short: "Get all submission in leetcode",
	Run: func(cmd *cobra.Command, args []string) {
		leetcodeService := services.NewLeetcodeService(csrftoken, LEETCODE_SESSION)
		submissions := leetcodeService.GetAllSubmitted(nil)

		for _, v := range submissions {
			titleColor := color.New(color.FgCyan, color.Bold)
			failedColor := color.New(color.FgRed)
			successColor := color.New(color.FgGreen)
			title := titleColor.Sprintf("%s", v.Title)
			var status string
			if v.StatusDisplay == "Accepted" {
				status = successColor.Sprint(v.StatusDisplay)
			} else {
				status = failedColor.Sprint(v.StatusDisplay)
			}

			output := fmt.Sprintf(`
Problem: %s
Status: %s
time: %s
=====================================
						`, title, status, time.Unix(int64(v.Timestamp), 0).Format(time.RFC1123Z))

			fmt.Println(output)
		}
	},
}
