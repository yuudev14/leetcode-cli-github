function twoSum(numbers: number[], target: number): number[] {
    let L = 1
    let R = numbers.length

    while(L <= R) {
        const sum = numbers[L - 1] + numbers[R - 1]
        if (sum > target) {
            R--
        } else if (sum < target) {
            L++
        } else {
            return [L, R]
        }
    }
    
};