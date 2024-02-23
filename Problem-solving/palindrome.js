/* 
problem : check the given string is palindrome or not
 palindrome : Palindromes read the same forward and backward, ignoring spaces, punctuation, and capitalization.

 expample : 'ABCDCBA'



*/

const isPalindrome = (inputString) => {
  const formattedString = inputString.split("").reverse().join("");

  if (formattedString === inputString) {
    console.log(`It's a palindrome string`);
  } else {
    console.log(`It's not a palindrome string`);
  }

  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString = reversedString + inputString[i];
  }

  console.log(reversedString);

  //   if (reversedString === inputString) {
  //     console.log(`It's a palindrome string`);
  //   } else {
  //     console.log(`It's not a palindrome string`);
  //   }
};

isPalindrome("A man, a plan, a canal, Panama");

const isPalindromeString = () => {
  let dummyString = "RADAR";

  // let formattedString = dummyString.split("").reverse().join("");

  // if (dummyString === formattedString) {
  //   console.log("its a palindrome string");
  // } else {
  //   console.log("its not a palindrome string");
  // }

  let leftPointer = 0;
  let rightPointer = dummyString.length - 1;
  let isPalindrome = true;
  while (leftPointer <= rightPointer) {
    if (dummyString[leftPointer] !== dummyString[rightPointer]) {
      isPalindrome = false;
      break;
    }

    leftPointer++;
    rightPointer--;
  }
  console.log(isPalindrome);
  return isPalindrome;
};

isPalindromeString();
