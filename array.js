
const fruits = ["Apple", "Banana", "Pineapple"];
const info = ["Cruzz", 18, false];

console.log(info[2]);
console.log(fruits[5]);
console.log(info.length);
console.log(fruits.length);

fruits[3] = "grapes";

console.log(fruits.length);
//changing the existing value of a an array

console.log(fruits[0]);

fruits[0] = "orange"; //the value at the given index changes i.e the original array changes

console.log(fruits[0]);

console.log(fruits);
console.log(typeof fruits);
console.log("\n");
fruits.forEach(function (name) {
  console.log(name);
});
console.log("\n");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


//declaring an empty array of fixed size and initialising the array with starting values:
let array = new Array(26).fill(0);
//declaring 2d arrays:
let board = new Array(4).fill().map(() => new Array(4).fill(1));
console.log(board);

