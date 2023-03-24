//the finally clause runs for every case:  wether there is an error or not an error.

//with error :

try {
  let a = 0;
  console.log(program);
  console.log("Running Successfully");
} catch (error) {
  console.log("There is an error");
} finally {
  console.log("Will execute every time");
}

//without error:
console.log("\n");

try {
  let b = 0;
  // console.log(program);
  console.log("Running Successfully");
} catch (error) {
  console.log("There is an error");
  console.log(program);
} finally {
  console.log("Will execute every time even if there is error in catch ");
  //used for final cleanup tasks
  //close the file.
  //exit the loop.
  //write to the log file.
}
