// async function func (){
//     return 6;
// }

// func().then((value)=>{
//     console.log(value);
// });

//example :

async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  });

  console.log("Fetching Delhi Weather ... ");

  let delhiW = await delhiWeather;

  console.log("Fetched Delhi Weather " + delhiW + ".");

  console.log("Fetching bangalore weather ...");

  let bangaloreW = await bangaloreWeather;

  console.log("Fetched Bangalore Weather " + bangaloreW + ".");

  return [delhiW, bangaloreW];
}

let a = weather();

a.then((value) => {
  console.log(value);
});

//Async functions return a promise value.
//Await is to used to store the value returned from a promise(maybe resolved or rejected).
//Await can pause the execution a function.


