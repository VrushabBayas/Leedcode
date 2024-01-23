const findNumbersWithMSBOne = require("./bitwise");

// BEGIN: Test cases for findNumbersWithMSBOne
test("findNumbersWithMSBOne should return an empty array when given an empty array", () => {
  const numbers = [];
  const result = findNumbersWithMSBOne(numbers);
  expect(result).toEqual([]);
});

test("findNumbersWithMSBOne should return an empty array when no numbers have MSB as 1", () => {
  const numbers = [2, 4, 6, 8];
  const result = findNumbersWithMSBOne(numbers);
  expect(result).toEqual([]);
});

test("findNumbersWithMSBOne should return an array with numbers having MSB as 1", () => {
  const numbers = [1, 3, 5, 7];
  const result = findNumbersWithMSBOne(numbers);
  console.log("result: ", result);
  expect(result).toEqual([1, 3, 5, 7]);
});
// END: Test cases for findNumbersWithMSBOne
