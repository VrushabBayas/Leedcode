const getSecondMax = (array) => {
  if (!array.length) return [];
  let max = Math.max(array[0], array[1]);
  let secondMax = Math.min(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] < max && array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
};

let result = getSecondMax([1, 2, -1, 5, 10, 34, 32, 40]);
result;
