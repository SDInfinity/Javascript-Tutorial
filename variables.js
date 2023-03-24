var a=5;                            //can be re-declared and updated , not used now
a="Cruzz";
{
    var a=20;
    console.log(a); //20
}
console.log(a); //20

let b=4;                         //can be updated but not re-declared scope 
{
    let b=10;
    console.log(b); //10
}
console.log(b);     //4

const c="Hi MOM!";               //cannot be updated nor re-declared 
console.log(c);    //Hi MOM!
