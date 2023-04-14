//The javascript interpreter moves the declarations to the top
//before excecution.

//example:

hello();
function hello(){
    console.log("Hello.");
}

console.log(a); //Decalartion is hoisted but not the initialisation.
var a = 1;
//The value of 'a' will remian undefined until a is initialised.
console.log(a);


// console.log(b);

let b = 1;  //cannot access b.

console.log(b);

// console.log(func()); //will throw an error since function expressions are not hoisted and class expressions too.
const func = function(){
    console.log("Function.");
}

console.log(func());