/**
 * @param {number[]} arr
 * @return {boolean}
 */
var hasDuplicates = function (arr) {
  let occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      return true;
    } else {
      occurrences[arr[i]] = true;
    }
  }
  return false;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      occurrences[arr[i]] = occurrences[arr[i]] + 1;
    } else {
      occurrences[arr[i]] = 1;
    }
  }

  let result = Object.values(occurrences);
  return !hasDuplicates(result);
};
// Test Case 1: Unique occurrences
console.log(uniqueOccurrences([4, 3, 3])); // Expected output: true

// // Test Case 2: Non-unique occurrences
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 3])); // Expected output: false

// // Test Case 3: Empty array
// console.log(uniqueOccurrences([])); // Expected output: true

// // Test Case 4: Single element array
// console.log(uniqueOccurrences([5])); // Expected output: true

// // Test Case 5: Array with negative numbers
// console.log(uniqueOccurrences([-1, -2, -2, -1, -1, -3])); // Expected output: true

// // Test Case 1: Array with duplicate values
// console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // Expected output: true

// // Test Case 2: Array without duplicate values
// console.log(hasDuplicates([1, 2, 3, 4, 5])); // Expected output: false

// // Test Case 3: Empty array
// console.log(hasDuplicates([])); // Expected output: false

// // Test Case 4: Single element array
// console.log(hasDuplicates([5])); // Expected output: false

// // Test Case 5: Array with negative numbers
// console.log(hasDuplicates([-1, -2, -3, -1])); // Expected output: true
