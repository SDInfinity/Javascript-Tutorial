
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
    let loopCount = 5;
    let count = 0;
    if (hours < 0 || hours > 23 || isNaN(hours)) {
        alert('Please enter a valid hour value between 0 and 23.');
        return;
      }
    
      if (minutes < 0 || minutes > 59 || isNaN(minutes)) {
        alert('Please enter a valid minute value between 0 and 59.');
        return;
      }
    
      if (seconds < 0 || seconds > 59 || isNaN(seconds)) {
        alert('Please enter a valid second value between 0 and 59.');
        return;
      }

      const alarmTime = new Date();
      alarmTime.setHours(hours);
      alarmTime.setMinutes(minutes);
      alarmTime.setSeconds(seconds);

      const now  = new Date();

      const timeToAlarm = alarmTime - now ;

      if (timeToAlarm < 0) {
        alert('Invalid time, please select a future time.');
        return;
      }
    
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
    }, timeToAlarm);
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
        text.innerHTML=`Your alarm is set at ${hrs} : ${mins} : ${sec}`;
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



