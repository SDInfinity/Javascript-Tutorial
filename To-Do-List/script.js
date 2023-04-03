let key = document.querySelector(".key");

let value = document.querySelector(".value");


let div1 = document.querySelector(".display-1");
let div2 = document.querySelector(".display-2");



let btn = document.querySelector(".btn");

console.log(btn);



btn.addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.setItem(`${key.value}`,`${value.value}`);
    div1.innerHTML+=`Value:${key.value}`;
    div2.innerHTML+=`Key:${value.value},added to Local Storage.`;
})

div1.innerHTML+="";
div2.innerHTML+="";
