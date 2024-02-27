const arr = [5, 7, 2, 8, 2, 0];

const min = Math.min(...arr);

console.log(min);

const findMinimum = (inputArr) => {
  let min = inputArr[0];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] < min) {
      min = inputArr[i];
    }
  }
  return min;
};

console.log(findMinimum([5, 7, 2, 8, 2, 1, 0]));
