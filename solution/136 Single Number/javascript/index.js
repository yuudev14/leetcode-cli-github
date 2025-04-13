/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const memoize = {}
    for(let i of nums){
        memoize[i] = (memoize[i] + 1) || 1
    }
    for(let x in memoize){
        if(memoize[x] === 1) return x
    }
    
    
};