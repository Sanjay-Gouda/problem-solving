// const nums = [2, 4, 6, 8, 10];

// nums.forEach((num) => (sum += num));
// console.log(nums);

const findAverage = (inputArr) => {
  let sum = 0;

  for (let i = 0; i <= inputArr.length; i++) {
    sum += inputArr[i];
  }

  let avg = sum / inputArr.length;
  console.log(avg);
};

findAverage([2, 4, 6, 8, 10]);
