//Primitive Data Types in JS:
let a=2;
let b="Cruzz";
let c=undefined;
let d=null;
let e=Symbol("This is a symbol");
let f=BigInt("567")+BigInt("3");
let g=true;

console.log(typeof(a));
console.log("\n"+a,b,c,d,e,f,g);


//Non-Primitive Data Types in JS:

const object={
    name:"Cruzz",
    roll:18,
    _id:undefined
};

console.log(object._id);
console.log(object["name"]);
console.table(object);
