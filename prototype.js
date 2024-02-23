// [1,2,1,3,4].skipWith(1)

const dummyArr = [1, 1, 2, 4, 2, 5, 7];

Array.prototype.skipWith = function (arg) {
  const answer = this.filter((id) => id !== arg);
  return answer;
};

console.log(dummyArr.skipWith(1));

const obj1 = {
  name: "Joe",
  getName: function () {
    console.log(this);
    return this.name + "ObjectName";
  },
  //   getName: () => {
  //     console.log(this);
  //     this.name + "ObjectName";
  //   },
};

const obj2 = {
  name: "Buttler",
  rollNo: "21",
  __proto__: obj1,
};

console.log(obj2);

// const dummyObject =  {
//     name:''
// }

const numArr = [1, 2, 3, 5];
/* CONVERT numArr into object like {1:1,2:2} */

Array.prototype.convertIntoObject = function () {
  let convertedObject = {};
  for (let i = 0; i < this.length; i++) {
    convertedObject[i] = this[i];
  }

  return convertedObject;
};

console.log(numArr.convertIntoObject());
