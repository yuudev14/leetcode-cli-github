/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // start with the last number of the arrays and compare
  // if nums[m -1] is greater than of num2[n -1]; put the last of nums1 in the last of nums 1 else vice versa
  // if n is still available, add n to the current index

  while (n && m) {
    const index: number = m + n - 1; // current index
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
  }

  while (n) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
}