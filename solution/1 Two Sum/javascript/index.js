/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    for (let i =0; i < nums.length; i++) {
        const num = nums[i]
        const check = target - num
        if(check in obj ) return [obj[check], i]
        obj[num] = i
    }
    
};