//promise chaining.

let prom1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds");
        resolve(56);
    },2000);
});

prom1.then((value)=>{
    console.log(value);
    let prom2=new Promise((resolve,reject)=>{
        resolve("Promise 2");
    });
    return prom2;
}).then((value)=>{
    console.log(value);
});
