
let arr = [2,3,8];
let [a,b,c] = arr;

console.log(a,b,c);

// let arr1 =[1,2,3,4,5];

// let [d,e,f,...rest]= arr1;

// console.log(d,e,f,rest);

//rest will be assigned from 4 , nothing will be assigned to 2 and 3.
let arr1 =[1,2,3,4,5];

let [d, , ,...rest]= arr1;

console.log(d,rest);

//for objects:
const {x,y}={x:1 ,y:5};

console.log(x,y);

//Spread operator:
//array to object.
let arr2 =[3,5,8];

let obj ={...arr1};

console.log(obj);

function sum(v1,v2,v3)
{
    return v1+v2+v3 ;
}


console.log(sum(...arr2));

const obj2 ={

    name: "Harry",
    age : 18
}


console.log({...obj2,age: 20});

//console.log({name: 18,...obj2}) will not work and the value will remain same.
