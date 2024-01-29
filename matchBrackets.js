const openings = ["(", "{", "["];
const matchBracktes = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openings.includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if (
        (char === "(" && top !== ")") ||
        (char === "{" && top !== "}") ||
        (char === "[" && top !== "]")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const res = matchBracktes("({})");
console.log(res);
