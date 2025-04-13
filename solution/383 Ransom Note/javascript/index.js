/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(let i of magazine){
        map[i] = map[i] + 1 || 1;
    }
    for(let x of ransomNote){
        if(!(x in map) || map[x] === 0) return false;
        map[x] -= 1;
    }
    return true
    
};