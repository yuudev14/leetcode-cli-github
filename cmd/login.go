package cmd

import (
	"fmt"
	"os"

	"github.com/example/leetcode-github/pkg/schema"
	"github.com/example/leetcode-github/pkg/utils"
	"github.com/spf13/cobra"
	"gopkg.in/yaml.v3"
)

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
		utils.CreateFolders(".secrets")

		secrets := schema.SecretsContent{
			CsrfToken:       csrftoken,
			LeetcodeSession: LEETCODE_SESSION,
		}

		secretsYaml, err := yaml.Marshal(&secrets)
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		fileName := ".secrets/secrets.yml"

		utils.WriteInFile(fileName, secretsYaml)

		fmt.Println("Credentials saved in store")

	},
}
