/**
 * Removes duplicate elements from an array.
 *
 * @param {Array} arr - The input array.
 * @returns {Array} - The array with duplicate elements removed.
 */
function removeDuplicates(array) {
  let uc = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const indexOfElement = array.indexOf(array[index]);
    if (index === indexOfElement) {
      array[uc] = array[index];
      uc++;
    }
  }
  array.length = uc;
  return array;
}
let res = removeDuplicates([1, 1, 2, 3, 3, 4]);

console.log("res: ", res);
