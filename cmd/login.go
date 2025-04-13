package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"gopkg.in/yaml.v3"
)

type SecretsContent struct {
	CsrfToken       string `yaml:"csrftoken"`
	LeetcodeSession string `yaml:"LEETCODE_SESSION"`
}

func init() {
	rootCmd.AddCommand(loginCmd)
	loginCmd.Flags().StringVarP(&csrftoken, "csrftoken", "c", "", "csrftoken to use in request")
	loginCmd.Flags().StringVarP(&LEETCODE_SESSION, "leetcode-session", "s", "", "leetcode session to use in request")
	loginCmd.MarkFlagRequired("csrftoken")
	loginCmd.MarkFlagRequired("leetcode-session")
}

var loginCmd = &cobra.Command{
	Use:   "login",
	Short: "login",
	Run: func(cmd *cobra.Command, args []string) {
		if err := os.Mkdir(".secrets", os.ModePerm); err != nil {
			fmt.Println("Warning", err)
		}

		secrets := SecretsContent{
			CsrfToken:       csrftoken,
			LeetcodeSession: LEETCODE_SESSION,
		}

		secretsYaml, err := yaml.Marshal(&secrets)
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		fileName := ".secrets/secrets.yml"

		if err := os.WriteFile(fileName, secretsYaml, os.ModePerm); err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		fmt.Println("Credentials saved in store")

	},
}
