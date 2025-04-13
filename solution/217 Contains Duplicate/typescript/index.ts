function containsDuplicate(nums: number[]): boolean {
    const _map : Record<number, number> = {}
    for (let num of nums) {
        if (num in _map) return true;
        _map[num] = 1
    }
    return false
    
};