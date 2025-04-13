func isValid(s string) bool {
	var arr []string

	hashmap := map[string]string{
		"[": "]",
		"(": ")",
		"{": "}",
	}

	for i := 0; i < len(s); i++ {
		char := s[i]
		_, ok := hashmap[string(char)]

		if ok {
			arr = append(arr, string(char))
		} else {
			if len(arr) == 0 {
				return false
			}
			popped := arr[len(arr)-1]

			arr = arr[0 : len(arr)-1]
			poppedVal, ok := hashmap[string(popped)]

			if !ok {
				return false
			}

			if poppedVal != string(char) {
				return false
			}

		}
	}

	return len(arr) == 0

}