class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        counts = [[] for _ in range(len(nums) + 1)]
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        for num, val in freq.items():
            counts[val].append(num)
        
        res = []
        for i in range(len(counts) - 1, 0, -1):
            for n in counts[i]:
                res.append(n)
            if len(res) == k:
                break
        return res


        