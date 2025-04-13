const isAlphanumeric = (char: string) => {
  const code = char.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) || 
    (code >= 97 && code <= 122)
  )
  

}

function isPalindrome(s: string): boolean {
  s = s.toLowerCase()

  let L = 0
  let R = s.length - 1

  while(L <= R) {
    if (!isAlphanumeric(s[L])) {
      L++
    } else if (!isAlphanumeric(s[R])) {
      R--
    } else if (s[L] !== s[R]) {
      return false
    } else {
      L++;
      R--
    }
    
  }
  return true
    
};