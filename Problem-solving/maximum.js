/* 

maximum number in that array [2,5,1,65,7] // 65 
*/

const findMaxNumber = (numsArr) => {
  console.log(Math.max(...numsArr));

  let maxNumber = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] > maxNumber) {
      maxNumber = numsArr[i];
    }
  }
  console.log(maxNumber);
};

findMaxNumber([2, 5, 1, 65, 7]);
