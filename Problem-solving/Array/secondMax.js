/* 
[45,32,76,4,87]





*/

const findSecondMax = (arr) => {
  let first_MAX = 0;
  let second_MAX = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_MAX) {
      second_MAX = first_MAX;
      console.log(second_MAX, "Second Max");
      first_MAX = arr[i];
      console.log(first_MAX, "first Max");
    }
  }

  console.log(second_MAX);
};

findSecondMax([45, 32, 76, 4, 87]);
