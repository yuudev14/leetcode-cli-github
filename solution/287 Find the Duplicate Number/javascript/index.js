/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const number = {}
    for(let i = 0; i < nums.length; i++){
       number[nums[i]] = (number[nums[i]] + 1) || 1 
        
    }
    for(let num in number){
        if(number[num] > 1) {
            return num
        }
    }
    return nums[0]
    
};