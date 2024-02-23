const sumOfNumber = (inputNum) => {
  let sum = 0;

  for (let i = 0; i < inputNum.length; i++) {
    sum += inputNum[i];
  }

  console.log(sum);
};

sumOfNumber([1, 2, 3, 4, 5]);

/* Usiing JS methods */

let arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
