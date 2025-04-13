/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    if(s.length !== t.length) return false;
    for (let i of s) {
        map[i] = map[i] + 1 || 1;
    }
    
    for (let x of t) {
        if(!(x in map) || map[x] === 0) return false;
        map[x] -= 1;
    }
    
    return true
    
};