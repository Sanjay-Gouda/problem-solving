/*
num = 5 
5*4*3*2*1

*/

const findFactorial = () => {
  let num = 5;

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
};

console.log(findFactorial());
