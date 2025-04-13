class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        left = 0
        right = 0
        curr = None
        unique = 0

        for num in nums:
            if curr != num:
                unique += 1
                if left < right:
                    nums[left] = num
                left += 1
                curr = num
            right +=1

        return unique