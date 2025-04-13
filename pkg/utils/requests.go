package utils

import (
	"net/http"
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
