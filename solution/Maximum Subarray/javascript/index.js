/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0
    for (let num of nums) {
        
        if(sum < 0) sum = 0
        sum += num
        if(sum > max) max = sum
    }
    return max;
    
    
};