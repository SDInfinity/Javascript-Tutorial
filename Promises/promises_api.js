//Promise API:

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 1");
    }, 1000);
  });
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2");
    }, 2000);
  });
  
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 3");
    }, 3000);
  });
  
  //Promise.all() :- Waits for all the promises to get resolved and
  //then creates an array of their results.
  
  let promise_all = Promise.all([p1, p2, p3]);
  
  promise_all.then((value) => {
    console.log(value);
  });
  
  //Promise.allSettled():- It will still work if any one the promises get rejected.
  
  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 4");
    }, 1000); 
  });
  
  console.log(promise);
  
  let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 5");
    }, 2000);
  });
  
  let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Value 6");
    }, 3000);
  });
  
  let promise_settled = Promise.allSettled([p4, p5, p6]);
  
  promise_settled.then((value) => {
    console.log(value);
  });
  
  //Promise.race():
  
  let p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 7");
    }, 11000);
  });
  
  let p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 8");
    }, 2000);
  });
  
  let p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 9");
    }, 3000);
  });
  
  let promise_race = Promise.race([p7, p8, p9]);
  
  promise_race.then((value) => {
    console.log(value);
  });
  
  //Other methods:
  //Promise.any():-The outcome is the forst promise to get fulfilled and not rejected.
  //Promise.resolve().
  //Promise.reject().