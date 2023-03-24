let num=[1,2,3,4];

let b=num.toString();
console.log(b);
let c=num.join("_");
console.log(c);       //it is a string
console.log(typeof c);

let d=num.pop();           //changes the array

console.log(num);
console.log(d);

num.push(4);
console.log(num);         //changes the array

let e=num.shift();         //changes the array


console.log(e);
console.log(num);

num.unshift(1);            //changes the array

console.log(num);

delete num[1];             //doesn't change the original array
console.log(num);
console.log(num.length);

let a1=[1,2,3,4];
let a2=[5,6,7,8];
let a3=[9,10,11,12];
let a4=a1.concat(a2,a3);
console.log(a4);

let array=[8,9,7];
console.log(array.sort()); //sorts alphabetically.


//sort takes an optional compare function and sorts according to the function.

//descending order
const compare=(a,b)=>
{
    return b-a;
}

console.log(array.sort(compare));

//ascending order
const compare2=(a,b)=>{
    return a-b;
}

console.log(array.sort(compare2));

let numbers=[1,2,3,8,9];
let deleted=numbers.splice(3,0,4,5,6,7);     //will be empty since splice returns the deleted items and changes the original array.
console.log(numbers);                        //changes the array

console.log("\n");

let deleted1=numbers.splice(3,4);            //4 items will be deleted starting from 3 and nothing will be inserted.
console.log(numbers);
console.log(deleted1);
console.log("\n");

let deleted2=numbers.splice(2,3,3,4,5,6);    //3,8,9 will be deleted and 3,4,5,6 will be inserted.
console.log(numbers);
console.log(deleted2);

let a=[1,2,3,4,5,6,7,8,9,10];
//Creates a new sub-array from the original array but does not change the original array.

let part1=a.slice(2);
console.log(a);
console.log(part1);

console.log("\n");
                                      
let part2=a.slice(2,5);
console.log(a);
console.log(part2);

let num2=[1,2,3,4,5];
console.log(num2.reverse());
