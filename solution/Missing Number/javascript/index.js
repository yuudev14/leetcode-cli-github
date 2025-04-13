/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const num = {}
    for(let i = 0; i < nums.length; i++){
        num[nums[i]] = true
    }
    for(let x = 0; x < nums.length + 1; x++){
        if(!num[x]){
            return x
        }
        
    }
    
};