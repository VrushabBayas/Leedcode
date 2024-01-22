function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1; // 2
  let j = n - 1; // 2
  let k = m + n - 1; // 3+3-1 = 5

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
}

// let res = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
res = mergeSortedArray([0], 0, [1], 1);
// res = mergeSortedArray([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
console.log(res);
