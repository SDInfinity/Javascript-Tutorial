const readline=require("readline-sync");

const n=Number(readline.question("Enter the value of n: "));
let i=1;
while(i<=n){
    console.log(i);
    i++;
}

//do-while-loop

const n1=Number(readline.question("Enter the value of n: "));
let a=1;
do{
    console.log(a);
    a++;
}
while(a<=n1);                                   //will execute at least once even if condition is false