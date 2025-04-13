class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        hash_map = set()
        
        max_length = 0
        L = 0

        for R in range(len(s)):
            while s[R] in hash_map:
                hash_map.remove(s[L])
                L += 1
            hash_map.add(s[R])
            max_length = max(max_length, len(hash_map))
        return max_length
