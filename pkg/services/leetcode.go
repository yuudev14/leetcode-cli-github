package services

import (
	"fmt"
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
	Timestamp     int64  `json:"timestamp"`
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
	GetAllSubmitted(LastDate *time.Time) []SubmissionData
}

type LeetcodeServiceImpl struct {
	csrftoken        string
	LEETCODE_SESSION string
}

func NewLeetcodeService(csrftoken string, LEETCODE_SESSION string) LeetcodeService {

	// if csrftoke or leetcode sessions is empty, grab from the secrets
	if csrftoken == "" {
		csrftoken = utils.GetKeyInYmlFile(".secrets/secrets.yml", "csrftoken")
	}
	if LEETCODE_SESSION == "" {
		LEETCODE_SESSION = utils.GetKeyInYmlFile(".secrets/secrets.yml", "LEETCODE_SESSION")
	}

	if LEETCODE_SESSION == "" || csrftoken == "" {
		fmt.Println("leetcode session and csrftoken should not be empty. please try to login or provide their values")
		os.Exit(1)
	}
	return &LeetcodeServiceImpl{
		csrftoken:        csrftoken,
		LEETCODE_SESSION: LEETCODE_SESSION,
	}

}

// GetAllSubmitted implements LeetcodeService.
func (l *LeetcodeServiceImpl) GetAllSubmitted(lastDate *time.Time) []SubmissionData {
	offset := 0
	limit := 20
	submissions := []SubmissionData{}
	second := 1
	next := true
	fetchCount := 0

	for next {
		fmt.Println("retrieving data please wait... offset", offset)
		url := fmt.Sprintf("%s?offset=%d&limit=%d", config.Config.Urls.LeetcodeSubmissions, offset, limit)
		var responseData SubmissionApiResponse
		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			fmt.Println("Error: ", err)
			os.Exit(1)
		}

		utils.SetLeetcodeCookies(req, l.csrftoken, l.LEETCODE_SESSION)
		resErr := utils.Post(req, &responseData)

		if resErr != nil {
			// to avoid permission error for triggering multiple apis.
			// if fetch count -- 3 add 1 in seconds
			fmt.Println("Warning: ", resErr)
			fetchCount += 1
			if fetchCount == 3 {
				second += 1
			}
			time.Sleep(time.Duration(second) * time.Second)
			continue
		}

		// if last date is provided, filter data and break
		if lastDate != nil {
			var shouldBreak bool
			for _, v := range responseData.SubmissionsDump {

				if time.Unix(int64(v.Timestamp), 0).Before(*lastDate) {
					shouldBreak = true
					fmt.Println(time.Unix(int64(v.Timestamp), 0), *lastDate)
					break
				} else {
					submissions = append(submissions, v)
				}
			}
			if shouldBreak {
				break
			}

		} else {
			submissions = append(submissions, responseData.SubmissionsDump...)
		}

		next = responseData.HasNext
		if next {
			offset += limit
		}

		second = 1
		fetchCount = 0

	}
	return submissions
}
