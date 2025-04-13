/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for(let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1
    }
    for (let x in map) {
        if (map[x] === 1) return s.indexOf(x)
    }
    return -1
    
    
};