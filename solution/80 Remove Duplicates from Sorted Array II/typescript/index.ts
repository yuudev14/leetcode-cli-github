function removeDuplicates(nums: number[]): number {
  let L = 0
  let R = nums.length - 1
  const hash: Record<number, number> = {}
  

  while(L <= R) {
    hash[nums[L]] = (hash[nums[L]] || 0) + 1

    if(hash[nums[L]] > 2) {
      nums.push(nums[L])
      nums.splice(L, 1)
      R--
    } else {
      L++
    }
    

  }
  return L
    
};