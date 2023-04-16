
function p(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456);
        },n);
    })
}

//iife function:
(async () =>{
    let a = await p(1000);  //resolves after 1 second.
    console.log(a+".");
})();

