class Solution:
    def search(self, nums: List[int], target: int) -> int:
        L, R = 0, len(nums) - 1

        while L <= R:
            index = (L + R) // 2

            if target > nums[index]:
                L = index + 1
            elif target < nums[index]:
                R = index - 1
            else:
                return index
        return -1
        