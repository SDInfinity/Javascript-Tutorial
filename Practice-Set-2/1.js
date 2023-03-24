const readline= require("readline-sync");
const a=Number(readline.question("Enter the number : "));
if(a%2==0 && a%3==0){
    console.log("Condition satisfied ");
}else{
    console.log("Condition not satisfied");
}