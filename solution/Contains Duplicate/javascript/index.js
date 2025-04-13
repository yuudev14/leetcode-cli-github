/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numObject = {};
    let result = false;
    for(let num of nums){
        if(num in numObject) {
            result = true
            break;
        }
        numObject[num] = true;
    }
    return result
};