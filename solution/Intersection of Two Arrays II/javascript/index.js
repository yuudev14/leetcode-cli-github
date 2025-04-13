/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const output = []
    const obj = {}
    for (let num of nums1) {
        obj[num] = obj[num] + 1 || 1
    }
    
    for (let num of nums2) {
        if(num in obj){
            output.push(num);
            obj[num]--
        }
        if(obj[num] === 0) delete obj[num]
    }
    return output
    
};