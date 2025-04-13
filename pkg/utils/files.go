package utils

import (
	"fmt"
	"os"
)

func CreateFolders(folderName string) {
	if err := os.Mkdir(folderName, os.ModePerm); err != nil {
		fmt.Println("Warning", err)
	}
}

func WriteInFile(fileName string, content []byte) {
	err := os.WriteFile(fileName, content, os.ModePerm)
	if err != nil {
		fmt.Println("Warning", err)
	}

	fmt.Println("created/updated a file")
}

func CreateAllFolders(folderPath string) {
	if err := os.MkdirAll(folderPath, os.ModePerm); err != nil {
		fmt.Println("Warning", err)
	}
}
