function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  let top = 0;
  let bottom = matrix.length - 1;

  let l = 0;
  let r = matrix[0].length - 1;

  while (top <= bottom) {
    let mid = Math.ceil((top + bottom) / 2);
    console.log(
      matrix[mid][0],
      matrix[mid][matrix[0].length - 1]
    );
    if (target < matrix[mid][0]) {
      bottom = mid - 1;
    } else if (target > matrix[mid][matrix[0].length - 1]) {
      top = mid + 1;
    } else {
      break;
    }
  }

  if (top > bottom) return false;
  const nums = matrix[Math.ceil((top + bottom) / 2)];

  while (l <= r) {
    const index = Math.floor((r + l) / 2);
    const curr = nums[index];
    if (target > curr) {
      l = index + 1;
    } else if (curr > target) {
      r = index - 1;
    } else {
      return true;
    }
  }

  return false;
}