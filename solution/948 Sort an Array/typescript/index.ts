/**
* Insertion sort
*/
// function sortArray(nums: number[]): number[] {
//     for (let x = 1; x < nums.length; x++) {
//         for (let y = x; y > 0; y--) {
//             if (nums[y] >= nums[y-1]) break;
//             const temp = nums[y]
//             nums[y] = nums[y-1]
//             nums[y-1] = temp
//         }
//     }
//     return nums
// };


/**
* Merge Sort
*/
const merge = (arr, l, m, r) => {
  const length1 = m - l + 1;
  const length2 = r - m;

  const leftArray = [];
  const rightArray = [];

  for (let x = 0; x < length1; x++) {
    leftArray[x] = arr[l + x];
  }
  for (let y = 0; y < length2; y++) {
    rightArray[y] = arr[m + 1 + y];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
};

const sortArray = (arr, l = 0, r = arr.length - 1) => {
  if (l < r) {
    const pivot = Math.floor((l + r) / 2);
    sortArray(arr, l, pivot);
    sortArray(arr, pivot + 1, r);
    merge(arr, l, pivot, r);
  }
  return arr;
};