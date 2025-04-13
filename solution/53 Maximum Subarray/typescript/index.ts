function maxSubArray(nums: number[]): number {
    // have a variable that stores the max number
    // loop through an array an add var and current index
    // if current index is greater then max variable, switch
    let max = nums[0]
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        max = Math.max(sum, max)
    }
    return max

};