/**
 * Finds the kth distinct element in an array.
 *
 * @param {Array} arr - The input array.
 * @param {number} k - The position of the distinct element to find.
 * @returns {*} The kth distinct element, or undefined if not found.
 */
var kthDistinct = function (arr, k) {
  let map = {};
  for (const element of arr) {
    if (map[element]) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  }

  let distinctCount = 0;
  for (let j = 0; j < arr.length; j++) {
    if (map[arr[j]] == 1) {
      distinctCount++;
      if (distinctCount == k) {
        return arr[j];
      }
    }
  }
  return "";
};
console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
console.log(kthDistinct(["y", "napli", "jfqjc", "mbl", "oeush"], 3));
console.log(
  kthDistinct(
    [
      "c",
      "exjk",
      "nbmg",
      "kgnas",
      "s",
      "oydx",
      "ghpao",
      "c",
      "r",
      "ohdm",
      "fq",
      "ashgg",
      "mm",
      "cc",
      "mymy",
      "w",
      "t",
      "neb",
      "grjdb",
      "cukk",
      "ujyhn",
      "dq",
      "hhuo",
      "qu",
      "seslw",
      "ybulz",
      "iug",
      "rs",
      "kyfu",
      "krz",
      "nw",
      "txnn",
      "r",
      "zpuao",
      "sh",
      "rfc",
      "c",
      "hgr",
      "jfia",
      "egm",
      "gmuuv",
      "gh",
      "x",
      "nfvgv",
      "ibo",
      "al",
      "wn",
      "o",
      "dyu",
      "zgkk",
      "gdzrf",
      "m",
      "ui",
      "xwsj",
      "zeld",
      "muowr",
      "d",
      "xgiu",
      "yfu",
    ],
    19
  )
);
