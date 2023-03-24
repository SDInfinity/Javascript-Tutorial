let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
};

async function call() {
  console.time("call");
  let a1 = await p1();
  let a2 = await p2();
  let a3 = await p3();
  console.log(a1 + " " + a2 + " " + a3);
  console.timeEnd("call");
}

call();

let promise_all = Promise.all([p1, p2, p3]);

console.log("\n");
console.time("promise_all");
promise_all.then((value) => {
  console.log(value);
});
console.timeEnd("promise_all");
