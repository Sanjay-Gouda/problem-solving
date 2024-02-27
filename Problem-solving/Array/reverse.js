const reversedArray = (inputArr) => {
  let revArr = [];

  for (let i = inputArr.length - 1; i >= 0; i--) {
    revArr.push(inputArr[i]);
  }
  return revArr;
};

console.log(reversedArray([4, 4, 2, 8, 29, 0]));
