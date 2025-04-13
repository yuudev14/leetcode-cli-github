class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currSum = 0
        maxSum = nums[0]
        maxL, maxR, L = 0, 0, 0
        for R in range(len(nums)):
            curr = currSum
            if currSum < 0:
                curr = 0
                L = R
            currSum = curr + nums[R]
            if currSum >= maxSum:
                maxSum = currSum
                maxL = L
                maxR = R
        return maxSum