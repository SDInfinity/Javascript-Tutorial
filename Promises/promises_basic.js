//Promise means a promise of code execution.
//It takes 2 callbacks : Resolve and Reject.
//The callbacks are provided by J.S itself.
//Now the promise object returned by new Promise constructor has 3 properties:
//1.State:- Initially pending, then gets fulfilled either resolved or rejected.
//2.Result:- Initially undefined, then either resolved with a value or rejected with an error.
//3.Consumers :- then ,catch and finally:
//then():- It is the default one and is used to handle successfull completions(resolve).
//catch():-We can use null as the first argument : then(null,f) or we can use catch to handle the errors.
//finally():-Used for general clean up tasks.

let p = new Promise(function (resolve, reject) {
  console.log("Promise");
  if (1 > 4 || 2 < 3) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

//then and catch:

p.then(function (
  message //message depends on the condition
) {
  console.log("Promise " + message);
}).catch(function (message) {
  console.log("Promise " + message);
});

let promise = new Promise((resolve, reject) => {
  //promise gets resolved with a value of 56.
  console.log("Hello");
  resolve(56);
});

//promises work parallely:

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Rejected");
    reject(new Error("a new error"));
  }, 5000);
});

console.log(p1);
console.log(p2);

p1.then((value) => {
  console.log(value);
});

p2.catch(() => {
  console.log("Some error occurred");
});
