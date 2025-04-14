package utils

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

func SetLeetcodeCookies(req *http.Request, csrftoken string, LEETCODE_SESSION string) {

	req.AddCookie(&http.Cookie{
		Name:  "csrftoken",
		Value: csrftoken,
	})
	req.AddCookie(&http.Cookie{
		Name:  "LEETCODE_SESSION",
		Value: LEETCODE_SESSION,
	})
}

func Post[T any](req *http.Request, responseData *T) error {
	client := &http.Client{}

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

	if resp.StatusCode != 200 {
		fmt.Println(string(body), resp.Status)
		return fmt.Errorf("status code is %d. msg: %s", resp.StatusCode, string(body))
	}

	if err := json.Unmarshal(body, responseData); err != nil {
		fmt.Println("Error when deserializing response data", err)
		os.Exit(1)
	}

	return nil

}
