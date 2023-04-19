let key = document.querySelector(".key");

let description = document.querySelector(".value");


let div1 = document.querySelector(".display-1");
let div2 = document.querySelector(".display-2");



let btn = document.querySelector(".add-btn");
let del_btn=document.querySelector(".delete-btn");
let clear_btn=document.querySelector(".clear-all")

console.log(btn);




btn.addEventListener('click',(e)=>{
    div1.innerHTML="";
    div2.innerHTML="";
    e.preventDefault();
    if(key.value.trim()!='')
    {
    localStorage.setItem(`${key.value}`,`${description.value}`);
    div1.innerHTML+=`<h1>Title: ${key.value}</h1>`;
    div2.innerHTML+=`<p>${description.value}`;
    }else{
        alert("Add a note first.")
    }
   
})



//removes the data if it exists.
del_btn.addEventListener('click',(e)=>{
    e.preventDefault();
  const data = localStorage.getItem(key.value);
  if (data) {
    localStorage.removeItem(key.value);
    div1.innerHTML = "";
    div2.innerHTML = "";
    document.querySelectorAll('.display-1 h1, .display-2 p').forEach(elem => elem.remove());
  } else {
    alert("Note does not exist in local storage.");
  }
})

clear_btn.addEventListener('click',(e)=>{
    const data = localStorage.getItem(key.value);
    if (data) {
      localStorage.clear();
      div1.innerHTML = "";
      div2.innerHTML = "";
      document.querySelectorAll('.display-1 h1, .display-2 p').forEach(elem => elem.remove());
    } else {
      alert("No items to clear.");
    }

})


