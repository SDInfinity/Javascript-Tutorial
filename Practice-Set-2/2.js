const readline= require("readline-sync");
const age=Number(readline.question("Enter age : "));

const answer=(age>=18)?"You can Drive":"You cannot drive";
console.log(answer);