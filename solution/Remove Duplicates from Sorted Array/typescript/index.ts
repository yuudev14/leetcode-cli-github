function removeDuplicates(nums: number[]): number {
    let x = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[x] !== nums[i]) {
            ++x;
            nums[x] = nums[i]
        }
    }
    
    return x + 1
};