const sortnumsay = () => {
  const nums = [8, 4, 5, 1, 7, 3, 2];

  console.log(nums.sort((b, a) => b - a));

  let temp;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums;
};

console.log(sortnumsay());
