// console.log("Hello");
// console.log(window);
// console.log(document);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.hasChildNodes);
// let arr=Array.from(document.body.childNodes);
// console.log(arr);
// let a=document.body.firstChild;
// console.log(a.parentNode);
// console.log(a.parentElement);

//Element only Navigation:

// let b = document.body;
// console.log("First child of b is :" + b.firstChild);
// console.log("First element child of b is :" + b.firstElementChild);
// let t=document.body.firstElementChild;
// console.log(t);



// let cardTitle=document.getElementsByClassName("card-title")[0];
// cardTitle.style.color="red";


// let cttile=document.querySelectorAll(".card-title");
// cttile[0].style.color="red";
// cttile[1].style.color="blue";
// cttile[2].style.color="green";

// //nested searching inside an element

// console.log(document.getElementsByClassName("card-body")[0].getElementsByTagName("a"));



// let id1=document.getElementById("id1");
// let sp1=document.getElementById("sp1");
// console.log(id1.matches(".box"));
// console.log(sp1.closest(".box"));
// console.log(id1.contains(sp1));


// document.querySelector("#item").style.color="black";


// console.log(document.querySelector(".sp1"));
// console.dir(document.querySelector(".sp1"));

// document.querySelector(".sp1").innerHTML="Okay <button>Hello World</button>";     //can include tags also 
// document.querySelector(".sp1").outerHTML;
 
document.querySelector(".sp1").textContent="hello world !!!";                         //cannot include any tags


console.log(document.body.textContent);

// document.querySelector(".sp1").hidden="true";


let attr=document.querySelector(".first");
attr.setAttribute("class","sass");
console.log(attr.hasAttribute("class"));
console.log(attr.dataset.game);
console.log(attr.dataset.player);

//insertion methods by using Javascript: 
 

attr.innerHTML="<button> Hello World </button>";

let div= document.createElement('div');
let div1=document.createElement('div');
let div2=document.createElement('div');
let div3=document.createElement('div'); 
let div4=document.createElement('div');
div2.innerHTML="after";
div3.innerHTML="before";
div1=innerHTML="Hello World prepend";
div.innerHTML="hello world";
console.log(div);         
attr.append(div);             //inside attr but at the end
attr.prepend(div1);           //inside attr but at beginning
attr.after(div2);             //after  attr outside of it
attr.before(div3);            //before attr outside of it
// attr.replaceWith(div2,div4);

//more insertion methods in javacript: 

attr.insertAdjacentHTML('beforebegin','<div> Batman </div');
attr.insertAdjacentHTML('afterbegin','<div> Superman </div');
attr.insertAdjacentHTML('beforeend','<div> Wonder Woman </div');
attr.insertAdjacentHTML('afterend','<div> Flash </div');

//removing a node:

// attr.remove();

//classList :

// attr.classList.add("red");
attr.classList.add("light-blue");
//attr.classList.toggle("red");
console.log(attr.classList.contains("red"));


//setTimeout and setInterval: 



// setTimeout(()=>{
//     alert("Hello World !!!")
// },2000);

 

// setInterval((e)=>{
//         document.write(".");  
// },100);

//browser events:

// document.querySelector(".button").onclick=()=>{
//     alert("Hello World !!!");
// }

// document.querySelector(".button").addEventListener('click',(e)=>{
//     console.log(e);
//     console.log(e.target);
//     console.log(e.clientX+" "+e.clientY);
//     alert("Hello World !!!");
// })




//callback function:

// function hello1(hello2)
// {
//     alert("hello1")
// }

// function hello2(){
//     console.log("Hello 2");
// }

// hello1(hello2());

//cookies


document.cookie="User=Harry";
document.cookie="User2=Harry";
// will update the cookie :-document.cookie="User=Harish";

console.log(document.cookie);


//encodeURICOomponent for special characters :

// let key = prompt("enter key of cookie");
// let value = prompt ("enter valur of cookie");

// document.cookie=encodeURIComponent(`${key}`)+"="+encodeURIComponent(`${value}`);

// console.log(document.cookie);

//localStorage and related methods: 

// let key=prompt("Enter key for local Storage ");
// let value=prompt("Enter value of local storage");

// localStorage.setItem(`${key}`,`${value}`);

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);


// if(key=="red" || key=="blue")
// {
//     localStorage.removeItem(key);
// }

// console.log(localStorage.key(1)+" "+localStorage.length);


//session storage:

//same methods as localStorage.

// window.onstorage((e)=>{
//     alert("changed");
//     console.log(e);
// })
