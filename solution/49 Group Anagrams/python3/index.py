class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}

        for word in strs:
            count = [0] * 26
            for char in word:
                count[ord(char) - ord('a')] += 1
            if str(count) not in hash_map:
                hash_map[str(count)] = []
            hash_map[str(count)].append(word)

        return list(hash_map.values())