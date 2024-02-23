let counter = 0;
function getData() {
  console.log("fethcing data", counter++);
}

function myDeboune(cb, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}
const optimizedFunction = myDeboune(getData, 1000);
// console.log(optimizedFunction());

const myThrottling = (cb, delay) => {
  return function (...args) {
    document.getElementById("btn").disabled = true;
    setTimeout(() => {
      cb();
    }, [delay]);
  };
};

const myThrottlingFunc = myThrottling(() => {
  document.getElementById("btn").disabled = false;

  console.log("data stored successfully...");
}, 3000);
