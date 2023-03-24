//when a function is passed as an argument to another function,it is known as a callback function.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a > b ? a - b : b - a;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a > b ? a / b : b / a;
}

function calc(a, b, operation) {
  return operation(a, b);
}

console.log(calc(2, 3, add));

function hello1(hello2) {
  console.log("Hello 1");
}

function hello2() {
  console.log("Hello 2");
}

hello1(hello2());

//function name(parameters,callback)
//{
//callback
//do something
//}

//error handling in callback functions.

function hello(callback) {
  // const error=true;                //since there is no error in this example.
  // const error=false;
  const error = null;
  callback(error);
}

function handleError(error) {
  if (error) {
    console.error("An error occurred");
  } else {
    console.log("Hello World 😁");
  }
}

hello(handleError);

//Pyramid of doom.

// step1(function(value1){
//     step2(function(value2)
//     {
//         step3(function(value3)
//         {
//             step4(function(value3))
//         });
//     });
// });
 