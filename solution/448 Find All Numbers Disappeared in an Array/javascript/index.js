/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const listOfNumbers = {};
    const output = [];
    nums.forEach(num => {
        listOfNumbers[num] = true;
    })
    for(let i = 1; i <= nums.length; i++) {
        if(!(i in listOfNumbers)){
            output.push(i)
        }
        
    }
    return output
    
    
};