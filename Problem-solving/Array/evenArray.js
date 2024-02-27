const findEvenNumbersFromArray = (inputArr) => {
  let evenArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] % 2 === 0) {
      evenArr.push(inputArr[i]);
    }
  }
  return evenArr;
};

console.log(findEvenNumbersFromArray([1, 2, 6, 8, 9, 10, 23, 24]));
