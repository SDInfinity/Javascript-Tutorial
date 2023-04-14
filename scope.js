let a = 10;
console.log(a); //'a' available globally.

{
    let b = 10;

}

// console.log(b); //cannot be accessed

let c =20;

function call(){
    let c = 10;  //a newly created block-scoped variable.
    console.log(c);
}
call();
console.log(c);