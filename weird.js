function checkWeird(n)
{
    if(n%2!=0 || (n>=6 && n<=20))
    {
        console.log("Weird");
    }
    else if(n%2===0 && (n>=2 && n<=5)){
        console.log("Not Weird");
    }
    else{
        console.log("Not Weird");
    }
}

checkWeird(4);
