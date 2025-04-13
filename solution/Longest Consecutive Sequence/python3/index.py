class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hash_map = set(nums)
        res = 0

        for num in hash_map:
            if num - 1 not in hash_map:
                l = 1
                while num + l in hash_map:
                    l += 1
                res = max(l, res)

        return res