let btn = document.querySelector("#check");
let text = document.querySelector("h1");
let body = document.querySelector("body");
btn.addEventListener('change',(e)=>{
    if(e.currentTarget.checked){
        text.textContent="Dark Mode";
        text.style.color="white";
        body.style.backgroundColor="black";
    }else{
        text.textContent = "Light Mode";
        text.style.color="black";
        body.style.backgroundColor="white";
    }
});