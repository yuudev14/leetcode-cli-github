// time complexity O(n)
// space complexity O(n)
function lengthOfLongestSubstring(s: string): number {
  let L = 0
  let maxLength = 0
  const set = new Set()

  for (let R = 0; R < s.length; R++) {
    while(set.has(s[R]) && R > 0){
      set.delete(s[L])
      L += 1
    }
    set.add(s[R])
    maxLength = Math.max(maxLength, R - L + 1)
  }
  return maxLength
};
