var twoSum = function (nums, target) {
  let mapping = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mapping[diff] !== undefined) {
      return [i, nums.indexOf(mapping[diff])];
    } else {
      mapping[nums[i]] = diff;
    }
  }
  return nums;
};

const res = twoSum([2, 7, 11, 15], 9);
console.log("res: ", res);
