function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        const index =  Math.ceil((right + left )/ 2)
        const curr = nums[index]
        if (target > curr) {
            left = index + 1
        } else if (curr > target) {
            right = index - 1
        } else {
            return index 
        }
    }
    return -1
    
};