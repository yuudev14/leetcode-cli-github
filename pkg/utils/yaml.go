package utils

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

func GetKeyInYmlFile(fileName string, key string) string {
	var data map[string]string
	f, err := os.ReadFile(fileName)
	if err != nil {
		fmt.Println("Warning", err)
	}
	err = yaml.Unmarshal(f, &data)
	if err != nil {
		fmt.Println("Warning", err)
	}
	value, ok := data[key]

	if ok {
		return value
	}

	return ""

}
