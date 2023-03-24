//we can throw custom errors with the error object.


let age = 190;

try {
  if (age > 180) {
    throw new Error("Invalid age");
    //throw new SyntaxError("Invalid age");
    //throw new ReferenceError("Invalid age");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
