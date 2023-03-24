//given a value of "N", print binary string without consecutive ones.

const readline = require ("readline-sync");
// import { question } from "readline-sync";

function print(str,N,lastPlace)
{
    if(N==0)
    {
        console.log(str);
        return;
    }else{
        print(str+"0",N-1,0);
        if(lastPlace==0)
        {
            print(str+"1",N-1,1);
        }
    }
}

let N=Number(readline.question("Enter the value of N: "));

print("",N,0);

