let num = [1, 2, 3, 4, 5];

num.map((value, index, array) => {
  console.log(index, value, array);
});

let a = num.map((x) => {
  //returns a new array but does not change the original array.
  return x * x;
});
console.log(a);

let b = num.filter((x) => {
  //returns a new array but does not change the original array.
  return x > 2;
});
console.log(b);

 //filter takes condition and passes that test over all the elements of the array.

let c = num.reduce((x1, x2) => {
  //returns a single value but does not change the original array.
  return x1 + x2;
});
console.log(c);

console.log(num);
