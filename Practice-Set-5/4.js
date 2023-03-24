const readline=require("readline-sync");
let num=[];
let n=Number(readline.question("Enter the number whose factorial you want: "));
for(let i=1;i<=n;i++)
{
    num.push(i);
}
let factorial=num.reduce((x1,x2)=>
{
    return x1*x2;
});
console.log(num);
console.log(factorial);
