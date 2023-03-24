
setInterval(()=>{
    document.querySelector(".hrs").innerHTML=(new Date().getHours()).toString();
    document.querySelector(".minutes").innerHTML=(new Date().getMinutes()).toString();
    document.querySelector(".seconds").innerHTML=(new Date().getSeconds()).toString();
},1000);