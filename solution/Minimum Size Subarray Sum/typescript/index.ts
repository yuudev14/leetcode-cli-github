function minSubArrayLen(target: number, nums: number[]): number {
    let curr = 0;
    let L = 0
    let minLength = 0
    let reachTarget = false

    for(let R = 0; R < nums.length; R++){
        curr += nums[R]
        while(curr >= target) {
            length =  R - L + 1
            minLength = reachTarget ? Math.min(length, minLength) : length
            reachTarget = true
            curr -= nums[L]
            L++

        }
    }

    return minLength
};