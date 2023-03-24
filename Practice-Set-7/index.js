
document.querySelector("#item").style.color="purple";           //selects the first item with the given css selector.

document.querySelectorAll("#item")[2].style.color="green";

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.backgroundColor="pink";
})