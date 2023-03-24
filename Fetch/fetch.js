import fetch from 'isomorphic-fetch';

let a = fetch("https://goweather.herokuapp.com/weather/Ny");

a.then((response) => {
    console.log(response.status);
    console.log(response.ok);
  return response.json(); //or response.json
})
  .then((data) => {
    console.log(data);
    console.log(data.temperature);
    console.log(data.wind);
    console.log(data.description);
  })
  .catch((error) => {
    console.log(error);
  });

// the json() method is called on the response object inside the first then() method. This converts the response body to JSON and returns a Promise that resolves with the JSON data.

// The JSON data is then logged to the console inside the second then() method.

// Finally, the catch() method is used to handle any errors that might occur during the fetch operation.
