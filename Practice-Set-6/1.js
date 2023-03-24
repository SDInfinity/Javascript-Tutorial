//run in browser

let runAgain=true;

while(runAgain)
    {
        let age=Number.parseInt(prompt("Enter age"));
if(age>=18){
    alert("You can drive");
}else{
    alert("You cannot drive");
}


let ask=confirm("Do you want to run again?");

if(ask)
{
    runAgain=true;
}else{
    runAgain=false;
}
    }