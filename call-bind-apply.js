const user = {
  name: "John",
};

function printName(age) {
  return this.name + " " + age;
}

console.log(printName.call(user, "28"));

const BindData = printName.bind(user, "28");

console.log(BindData());

const myObject = {
  name: "Print Me",
};
let printNameOfCurrentObject = function (age, gender, isGraduated) {
  return {
    name: this.name,
    age: age,
    gender: gender,
    isGraduated: isGraduated,
  };
};

const TestCallObject = {
  name: "Call Object",
};
console.log(
  printNameOfCurrentObject.call(TestCallObject, "24", "male", "yes"),
  "USING CALL"
);
console.log(
  printNameOfCurrentObject.apply(TestCallObject, ["24", "male", "yes"]),
  "USING APPLY"
);

const testBind = printNameOfCurrentObject.bind(
  TestCallObject,
  "24",
  "male",
  "yes"
);
console.log(testBind(), "USING BIND");

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);

// Array.prototype.mySumMethod = function () {
//   let sum = 0;

//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }

//   return sum;
// };

// console.log(arr.mySumMethod());
