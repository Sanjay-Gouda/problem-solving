/* 
    153
step 1:  count sum of digits of given number;
step 2:  count sum of digits of given number;






*/

const isItArmstrongNumber = () => {
  const inputNumber = 153;
  const sumOfDigites = inputNumber.toString();
  const splitNumber = sumOfDigites.split("");
  let sumOfDigits = 0;

  for (let i = 0; i <= splitNumber.length - 1; i++) {
    let convertedInteger = parseInt(splitNumber[i]);
    sumOfDigits = sumOfDigits + Math.pow(convertedInteger, splitNumber.length);
  }

  if (sumOfDigits === inputNumber) {
    console.log(`it's a armstrong number`);
  } else {
    console.log(`it's not a armstrong number`);
  }
};

isItArmstrongNumber();
