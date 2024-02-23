
/* 
    accpepts two in integar let's say a and b where a is greater than to b a>b 
    replace large number with the small numbers until remainder becomes zero
    
    a % b =remiander  
    48 % 18 = 12;
    18 % 12 = 6
    12 % 6 = 0

    

*/

const greatestCommonDivisior = () => {
  let num1 = 48,
    num2 = 18;

  while (num2 !== 0) {
    let remainder = num1 % num2;
    console.log(remainder);
    num1 = num2;
    num2 = remainder;
  }
  console.log("GCD is", num1);
  return num1;
};

greatestCommonDivisior();
