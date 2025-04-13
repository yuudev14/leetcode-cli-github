package schema

type SecretsContent struct {
	CsrfToken       string `yaml:"csrftoken"`
	LeetcodeSession string `yaml:"LEETCODE_SESSION"`
}
