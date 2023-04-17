
let form =document.querySelector('form');
let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");


setInterval(()=>{
    hrs.innerHTML=`${(new Date().getHours()).toString()}`
    min.innerHTML=`${(new Date().getMinutes()).toString()}`
    sec.innerHTML=`${(new Date().getSeconds()).toString()}`
},1000);

let repeat;
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function setAlarm(hours, minutes, seconds) {
    let timeInMillis = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
    let loopCount = 5;
    let count = 0;
    let audio = new Audio('alarm.mp3');
    repeat = setTimeout(() => {
        audio.addEventListener('ended', function() {
            if (count < loopCount - 1) { // loop again if not yet reached the desired loop count
              count++;
              audio.currentTime = 0; // reset the audio to the beginning
              audio.play();
            }
          });
          audio.play();
    }, timeInMillis);
    console.log(timeInMillis);
  }


let set_btn = document.querySelector(".set");
let cancel_btn = document.querySelector(".cancel");
let text = document.querySelector(".info");

set_btn.addEventListener("click",(e)=>{
    text.innerHTML="";
    e.preventDefault();
    let hrs = hours.value;
    let mins = minutes.value;
    let sec = seconds.value;
    if(hrs.trim()!='' && mins.trim()!='' && sec.trim()!='' && /\d/.test(hrs) && /\d/.test(mins) && /\d/.test(sec))
    {
        text.innerHTML=`Your alarm will go after  ${hrs} hrs ${mins} mins & ${sec} seconds.`;
        setAlarm(parseInt(hrs),parseInt(mins),parseInt(sec));
    }else{
        alert("Enter valid time for alarm ");
    }
    
});

cancel_btn.addEventListener('click',(e)=>{
    text.innerHTML="";
    let hrs = hours.value;
    let mins = minutes.value;
    let sec = seconds.value;
    if(hrs.trim()!='' && mins.trim()!='' && sec.trim()!='')
    {
        clearTimeout(repeat);
        alert("Alarm cancelled");
        form.reset();
    }else{
        alert("No alarm to cancel.");
    }
})



