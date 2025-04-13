package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var csrftoken string
var LEETCODE_SESSION string

var rootCmd = &cobra.Command{
	Use:   "leetcode-github",
	Short: "Sample project using go to import all answered questions in git",
	Run: func(cmd *cobra.Command, args []string) {

	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
