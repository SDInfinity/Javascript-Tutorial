let date = document.querySelector(".date");
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
date.innerHTML+=`${monthNames[new Date().getMonth()]}  ${new Date().getFullYear()}.`;


let cityName = document.querySelector(".name");
// console.log(cityName);

let temp = document.querySelector(".temp");
let feels_like = document.querySelector(".sp-1");
let humidity = document.querySelector(".sp-2");
let p = document.querySelector(".display");

function loadInterval(element)
{
  let index=0;
  const interval = setInterval(()=>{
    if(index<element.length)
    {
      p.innerHTML+=element.charAt(index);
      index++;
    }else{
      clearInterval(interval);
    }
  },20);
}

async function getWeather(cityName,options)
{
    let response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,options);
    if(response.status===400)
    {  
      alert("Something went wrong !!! please try entering again."); 
      p.innerHTML="Something went wrong..."
      document.remove(temp);
      document.remove(feels_like);
      document.remove(humidity);
    }
    let r = await response.json();
    return r;
}

p.innerHTML="";
async function call(cityName)
{
  let options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "02a23a5896mshc6db6f1790bcd5ap1bfb99jsn677b8cf77f88",
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  }
  temp.innerHTML="";
  feels_like.innerHTML="";
  humidity.innerHTML="";
    try{
      let data = await getWeather(cityName,options);
      console.log(data.temp);
      loadInterval(`The Weather updates for ${cityName} are as follows:`);
      setTimeout(()=>{
        temp.innerHTML+=`${data.temp}℃`;
      feels_like.innerHTML+=`${data.feels_like}℃`;
      humidity.innerHTML+=`${data.humidity}`;
      },1000);
      p.innerHTML="";
    }catch (error) {
      console.log(error);
    }
}


let btn = document.querySelector(".btn");

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(cityName.value);
  if(cityName.value.trim()!=='')
  {
    call(cityName.value);
  }else{
    alert("Enter City name please !");
  }
})

