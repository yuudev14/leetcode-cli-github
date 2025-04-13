package utils

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

func GetKeyInYmlFile(fileName string, key string) string {
	var data map[string]string
	f, err := os.ReadFile(".secrets/secrets.yml")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	err = yaml.Unmarshal(f, &data)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	return data[key]

}
