const dp = (index: number, nums: number[], sum: number = 0) : number => {
  if(index >= nums.length) {
    return sum
  }
  return dp(index + 2, nums, sum + nums[index])
}


function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const one = dp(0, nums)
  const two = dp(1, nums)
  return one >= two ? one : two
};