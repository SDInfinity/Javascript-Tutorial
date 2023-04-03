let a = {
  name: "Harry",
  age: "20",
};

let p = {
  run: () => {
    console.log("Run");
  },
};

a.__proto__ = p;  //J.S looks for the method in 'a' and then in 'p'.This is Prototypical Inheritance.

a.run();


p.__proto__={
    fruit: "Apple"
};

console.log(a.fruit);