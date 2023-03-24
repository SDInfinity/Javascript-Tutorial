const readline=require("readline-sync");

let sum=0;
const n=Number(readline.question("Enter the range: "));
for(let i=0;i<=n;i++){
    sum=sum+i;
}
//we cannot log the value of i here because due to let it's scope remains within the block.

console.log("Sum: "+sum);

//fatorial of a number 

let f=1;
for(let i=1;i<=5;i++)
{
    f=f*i;
}
console.log("Factorial: "+f);