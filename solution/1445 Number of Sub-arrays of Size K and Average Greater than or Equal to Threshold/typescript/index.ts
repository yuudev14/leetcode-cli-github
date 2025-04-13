function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const stack: number[] = []
  let result = 0;
  for (let num of arr) {
    stack.push(num)
    if (stack.length > k) {
      stack.shift()
    }
    if (stack.length === k) {
      const sum = stack.reduce((curr, prev) => curr + prev, 0)
      const avg = sum / k
      if (avg >= threshold) {
        result++;
      }
    }

  }
  return result;
    
};