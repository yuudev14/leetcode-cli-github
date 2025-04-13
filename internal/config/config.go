package config

type URLsType struct {
	LeetcodeBase        string
	LeetcodeSubmissions string
}

type ConfigType struct {
	Urls URLsType
}

var urls = URLsType{
	LeetcodeBase:        "https://leetcode.com",
	LeetcodeSubmissions: "https://leetcode.com/api/submissions/",
}

var Config = ConfigType{
	Urls: urls,
}
