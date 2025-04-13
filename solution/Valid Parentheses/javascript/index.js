/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
        
    }
    
    const arr = [];
    
    for ( let c of s ) {
        if(c in map) {
            arr.push(c);
        } else {
            const last = arr.pop();
            if(c !== map[last]) return false
        }
    }
    
    if(arr.length) return false
    
    return true
    
};