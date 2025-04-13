function twoSum(nums: number[], target: number): number[] {
    const _map = {}
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in _map) {
            return [i, _map[diff]]
        }
        
        _map[nums[i]] = i
    }
    
};