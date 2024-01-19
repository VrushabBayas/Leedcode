/**
 * Rotates an array by k positions.
 *
 * @param {Array} array - The array to be rotated.
 * @param {number} k - The number of positions to rotate the array.
 * @returns {Array} - The rotated array.
 */

const rotateArrayByK = (array, k) => {
  //   if (!array.length) return [];
  //   let subArray = array.splice(k);

  //   return [...subArray, ...array];
  return array.slice(k).concat(array.slice(0, k));
};

let res = rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2);
console.log(res);

const swap = (array, start, end) => {
  const temp = array[start];
  array[start] = array[end];
  array[end] = temp;
};
const reverse = (array, start, end) => {
  while (start < end) {
    swap(array, start, end);
    start++;
    end--;
  }
  return array;
};
const rotateByK = (array, k) => {
  const n = array.length;
  const rotations = k % n;
  //revers whole array
  reverse(array, 0, n - 1);
  reverse(array, 0, rotations - 1);
  reverse(array, rotations, n - 1);
  return array;
};

const result = rotateByK([1, 2, 3, 4, 5, 6], 2);
console.log(result);
