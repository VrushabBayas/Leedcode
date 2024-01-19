/**
 * Moves all the zeros in the given array to the right side.
 * @param {number[]} array - The input array.
 * @returns {number[]} - The modified array with zeros moved to the right side.
 */
//helper function to swap two elements in an array
const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const moveZeroToRight = (array) => {
  let resultArray = [];
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element !== 0) {
      resultArray.push(element);
    } else {
      counter++;
    }
  }
  while (counter > 0) {
    resultArray.push(0);
    counter--;
  }
  return resultArray;
};

let array = [0, 2, 0, 1];
const moveToRightWithInPlace = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] === 0) {
      swap(array, left, right);
      right--;
    } else {
      left++;
    }
  }
  return array;
};

// console.log(moveZeroToRight(array));

console.log(moveToRightWithInPlace(array));

// console.log(moveToRightWithInPlace(array)); // Output: [1, 2, 0, 0]

// array = [0, 0, 0, 0];
// console.log(moveToRightWithInPlace(array)); // Output: [0, 0, 0, 0]

// array = [1, 2, 3, 4];
// console.log(moveToRightWithInPlace(array)); // Output: [1, 2, 3, 4]

// array = [0, 0, 1, 0, 2, 0, 3];
// console.log(moveToRightWithInPlace(array)); // Output: [3, 2, 1, 0, 0, 0, 0]
