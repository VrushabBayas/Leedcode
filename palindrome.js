/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = `${x}`;
  return temp.split("").reverse().join("") === String(x);
};

let res = isPalindrome("112211");
console.log(res);
