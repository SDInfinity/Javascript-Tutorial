//JS is a single-threaded language with a non-blocking event loop.

//Asynchronous calls in JS .

//Now, JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program. 
//The call stack is the same as the stack data structure that you might read in Data structures.
//JavaScript is a single-threaded language, it is synchronous in nature.
//In synchronous calls, all the work is done line by line i.e. first one task is executed then the second task is executed, no matter how much time one task will take. 
//This arises the problem of time wastage as well as resource wastage.
//These two problems are overcome by asynchronous calls, where one doesn’t wait for one call to complete instead it runs another task simultaneously. 
//Browsers also have Event Loops, Callback queue, and WebAPIs that is also used to run the JS code. 
//Although these are not part of JS it also helps to execute the JS properly as we sometimes use the browser functions within the JS.

// By default, JavaScript executes code synchronously, meaning that each line of code is executed one after the other, in the order that it appears in the code. However, JavaScript also has the ability to perform asynchronous operations using features such as callbacks, promises, and async/await.
// Asynchronous operations in JavaScript allow code to execute non-blocking operations, which means that the code can continue to execute while waiting for a long-running task to complete. This can help improve the performance and responsiveness of web applications.
// For example, when making an HTTP request using JavaScript, the request is typically made asynchronously so that the page can continue to render while waiting for the response from the server.
// So, in summary, JavaScript is both synchronous and asynchronous, depending on how the code is written and what features are being used.


//Let's take an example which demonstrates how asynchronous calls work in JS :

console.log('😀');

setTimeout( function()
{
    console.log('😑');
},3000);

console.log('😅');

//Output should be 😀😑😅  but its not 
//We start from the top , first statement gets executed in the call stack then gets popped out 
//Now, it places the second statement in the call stack and when it tries to execute the statement, 
//it finds out that setTimeout() doesn’t belong to JS so it pops out the function and puts in the WebAPI to get executed there.
//Since the call stack is now again empty, it places the third statement in the stack and executes it thus prints 😑 in the console.


//In the meanwhile, the WebAPI executes the timeout function and places the code in the callback queue. 
//The eventloop checks if the call stack is empty or not or whether there is any statement in the callback queue that needs to be executed at the time. 
//As soon as the event loop checks that the call stack is empty and there is something in the callback queue that needs to be executed, 
//it places the statement in the call stack and the call stack executes the statement and prints 😀 in the console of the browser.

//credit : GeeksForGeeks & ChatGPT.