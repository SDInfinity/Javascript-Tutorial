//We use try-catch so that our script doesn't pause executing even if an error is thrown.


console.log("Hacking Wifi....");


setTimeout(() => {
    console.log("Fetching Data");
}, 2000);

setTimeout(() => {
    console.log("Fetching Username and Password");
}, 3000);

try 
{
    console.log(Password);
}catch(error){
    console.log("Error on fetching password ...");
}

setTimeout(() => {
    console.log("Password Fetched ☠️.");
}, 4000);


//if we didn't use try-catch then our script would've stopped executing.

