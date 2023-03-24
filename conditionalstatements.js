const readline=require("readline-sync");
const a=Number(readline.question("What's your age? "));
//if-else

if(a<0){
    console.log("Invalid age");
}else if(a<9)
{
    console.log("You are still a kid");
}
else if(a>=9 && a<18){
    console.log("Still no driving");
}else{
    console.log("You can drive");
}

//switch-case

const choice = String(readline.question("Enter your choice : "));
const b=2;
const c=2;
switch(choice)
{
    case '+':
        console.log(b+c);
        break;
    case '-':
        console.log(b-c);
        break;
    case '*':
        console.log(b*c);
        break;
    case '/':
        console.log(b/c);
        break;
    default:
        console.log("Invalid Choice");       

}

//ternary-operator

const age=18;
const canDrive=(age>=18)?"yes":"no";
console.log(canDrive);