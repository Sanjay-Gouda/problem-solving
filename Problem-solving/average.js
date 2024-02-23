/* average of numbers 
example = [1,2,3,4,5] 

*/

const average = (numsArr) => {
  let sum = 0;
  for (let i = 0; i < numsArr.length; i++) {
    sum = sum + numsArr[i];
  }

  let average = sum / numsArr.length;

  console.log("average of given array is ", average);
};

average([1, 2, 3, 4, 5]);
