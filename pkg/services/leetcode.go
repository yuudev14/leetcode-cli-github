package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/example/leetcode-github/internal/config"
	"github.com/example/leetcode-github/pkg/utils"
)

type SubmissionApiResponse struct {
	SubmissionsDump []SubmissionData `json:"submissions_dump"`
	HasNext         bool             `json:"has_next"`
}

type SubmissionData struct {
	Id            int    `json:"id"`
	QuestionId    int    `json:"question_id"`
	Lang          string `json:"lang"`
	LangName      string `json:"lang_name"`
	Time          string `json:"time"`
	Timestamp     int    `json:"timestamp"`
	Status        int    `json:"status"`
	StatusDisplay string `json:"status_display"`
	Runtime       string `json:"runtime"`
	Url           string `json:"url"`
	IsPending     string `json:"is_pending"`
	Title         string `json:"title"`
	Memory        string `json:"memory"`
	Code          string `json:"code"`
	CompareResult string `json:"compare_result"`
	TitleSlug     string `json:"title_slug"`
	HasNote       bool   `json:"has_notes"`
	FlagType      int    `json:"flag_type"`
	FrontendId    int    `json:"frontend_id"`
}

type LeetcodeService interface {
	GetAllSubmitted() []SubmissionData
}

type LeetcodeServiceImpl struct {
	csrftoken        string
	LEETCODE_SESSION string
}

func NewLeetcodeService(csrftoken string, LEETCODE_SESSION string) LeetcodeService {
	return &LeetcodeServiceImpl{
		csrftoken:        csrftoken,
		LEETCODE_SESSION: LEETCODE_SESSION,
	}

}

// GetAllSubmitted implements LeetcodeService.
func (l *LeetcodeServiceImpl) GetAllSubmitted() []SubmissionData {
	offset := 0
	limit := 1000
	submissions := []SubmissionData{}
	next := true
	client := &http.Client{}
	for next {
		fmt.Println("retrieving data please wait...")
		url := fmt.Sprintf("%s?offset=%d&limit=%d", config.Config.Urls.LeetcodeSubmissions, offset, limit)

		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			fmt.Println("Error: ", err)
			os.Exit(1)
		}

		utils.SetLeetcodeCookies(req, l.csrftoken, l.LEETCODE_SESSION)

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
			os.Exit(1)
		}

		var responseData SubmissionApiResponse

		if err := json.Unmarshal(body, &responseData); err != nil {
			fmt.Println("Error when deserializing response data", err)
			os.Exit(1)
		}

		submissions = append(submissions, responseData.SubmissionsDump...)
		next = responseData.HasNext
		if next {
			offset += limit
		}
		time.Sleep(1 * time.Second)
	}
	return submissions
}
