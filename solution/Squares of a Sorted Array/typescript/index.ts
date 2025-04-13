function sortedSquares(nums: number[]): number[] {
    let first = 0
    let last = nums.length - 1
    
    const newArr = new Array(nums.length)
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[first]) > Math.abs(nums[last])) {
            newArr[i] = nums[first] * nums[first]
            first += 1
        } else {
            newArr[i] = nums[last] * nums[last]
            last -= 1
        }
    }
    
    
    
    return newArr

};