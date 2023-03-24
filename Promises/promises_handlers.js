// attaching multiple handlers to a Promise.

let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hey I am resolved after 2 seconds");
        resolve(1);
    },2000);
});

promise1.then((value)=>{
    console.log("This handler first executes");
});

promise1.then((value)=>{
    console.log("This handler excecutes after the first handler");
});
