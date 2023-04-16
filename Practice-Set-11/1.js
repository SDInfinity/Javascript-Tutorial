
function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },1000);
    })
}

function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("World !!!")
        },3000);
    })
}

//using iife:

(async () =>{
    let a1  = await p1();
    console.log(a1);
    let a2  = await p2();
    console.log(a2);
})();

