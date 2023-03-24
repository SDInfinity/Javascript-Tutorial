const readline=require("readline-sync");

const n=Number(readline.question("Enter a number: "));

let i;
while(i!==n){
   
    let i=Number(readline.question("Enter the correct number: "));
    if(i===n)                    //when condition matches we come out of the loop
    break;
    else{
        console.log("Try Again");
    }
   
}