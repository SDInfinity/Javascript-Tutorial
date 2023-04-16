//The inner function gets returned along with it's lexical environment.

function hello () {
    let message = "Hello";
    console.log(message);
    let c = function hello1(){
        console.log("Hi! " + message+".");
    }
    message = "Not Hello" //this is will be returned ,since the reference is returned.
    c();
}

hello(); 
