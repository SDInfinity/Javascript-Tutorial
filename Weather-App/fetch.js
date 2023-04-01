

let title = document.querySelector(".title");

function loader(element) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < element.length) {
      title.innerHTML += element.charAt(index);
      index++;
    } else {
      clearInterval(interval); // clear the interval when finished
    }
  }, 50);
}

let cityName = document.querySelector(".input");
let button = document.querySelector(".button");
console.log(cityName.value);


async function api(cityName,options) {
  let response = await fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,options
  );

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  let weatherData = await response.json();
  return weatherData;
}

async function call(cityName) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "02a23a5896mshc6db6f1790bcd5ap1bfb99jsn677b8cf77f88",
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  try {
    let data = await api(cityName,options);
    console.log(data.temp);
    title.innerHTML = "";
    loader(`The weather details of ${cityName} are as follows : 
    
    Temperature: ${data.temp} degree celsius \n, Feels like : ${data.feels_like} \n  ,Humidity : ${data.humidity}  \n ,Wind Speed : ${data.wind_speed} .
    
    `);
  } catch (error) {
    console.log(error);
    title.innerHTML = "";
    loader("Could not fetch weather data. Please try again.");
  }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
  console.log(cityName.value);
  if(cityName.value.trim() !== '')
  {
    call(cityName.value);
  }
  
});
