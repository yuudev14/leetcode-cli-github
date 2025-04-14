class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        hash_map = set(s)
        res = 0

        for c in hash_map:
            count = 0
            l = 0
            for r in range(len(s)):
                if s[r] == c:
                    count += 1
                while (r - l + 1) - count > k:
                    if s[l] == c:
                        count -= 1
                    l += 1

                res = max(res, r - l + 1)

        return res