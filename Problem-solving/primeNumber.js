const isPrime = () => {
  let num = 17;
  for (let i = 2; i * 1 <= num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isPrime());
