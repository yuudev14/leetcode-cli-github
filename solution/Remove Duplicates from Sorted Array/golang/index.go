func removeDuplicates(nums []int) int {
	var curr int = -999
	left := 0
	unique := 0
	for i, n := range nums {
		if curr != n {
			unique += 1
			if left < i {
				nums[left] = n
			}
			left += 1
			curr = n
		}

		if curr >= n && left < i {
			nums[i] = -999
		}

	}
	return unique
}