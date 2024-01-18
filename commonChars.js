function commonChars(words) {
  if (!words.length) {
    return [];
  }
  let result = [...words[0]];

  for (let i = 1; i < words.length; i++) {
    let word = [...words[i]];
    result = result.filter((char) => {
      let index = word.indexOf(char);
      if (index !== -1) {
        word[index] = null;
        return true;
      }
      return false;
    });
  }
  return result;
}
// console.log(commonChars([])); // Expected output: []

console.log(commonChars(["bella", "label", "roller"])); // Expected output: ['e','l','l']
console.log(commonChars([])); // Expected output: []

console.log(commonChars(["hello", "world"])); // Expected output: ['l', 'o']

console.log(commonChars(["apple", "banana", "cherry"])); // Expected output: []

console.log(commonChars(["programming", "problem", "solving"])); // Expected output: ['o']

console.log(commonChars(["abc", "def", "ghi"])); // Expected output: []

console.log(commonChars(["aaa", "aa", "a"])); // Expected output: ['a']
