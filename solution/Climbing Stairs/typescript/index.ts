function climbStairs(n: number, index: number = 0, memo : number[] = Array(n).fill(-1)): number {
    if (n < index) return 0;
    if (n === index) return 1;
    if (memo[index] !== -1) return memo[index]
    
    const left = climbStairs(n, index + 1, memo);
    const right = climbStairs(n, index + 2, memo);
    
    memo[index] = left + right
    
    return memo[index]
};