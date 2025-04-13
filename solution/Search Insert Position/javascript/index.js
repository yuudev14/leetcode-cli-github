/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i in nums){
        if(nums[i] >= target){
            return i
        }
    }
    return nums.length
    
};