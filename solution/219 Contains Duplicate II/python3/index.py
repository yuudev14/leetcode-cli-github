class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        mapper = dict()
        c = 0
        for i in range(len(nums)):
            if c > k:
                c = 0
            if nums[i] in mapper:
                if abs(mapper[nums[i]] - i) <= k:
                    return True
            mapper[nums[i]] = i
            c += 1
        return False

            