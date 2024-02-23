/* Using Js Method */

let arr = [4, 7, 2, 9, 0, 1];

console.log(Math.max(...arr));

const findMaximum = (inputArr) => {
  let max = inputArr[0];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > max) {
      max = inputArr[i];
    }
  }
  console.log(max);
  return max;
};

findMaximum([4, 7, 2, 9, 10, 1]);
