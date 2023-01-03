/*
    JS is a single threaded language
    - Only one set of instructions are executed at any one time
    - Single threaded = 1 call stack and 1 memory heap

    Because JS is single threaded we also utilise the JS runtime which runs on the browser in the background.

    JS Runtime consists of the Web API to communicate to the JS Engine

    All browsers have a JS Runtime which includes a Web API

    Examples of things the Web API provides include, HTTP Requests, DOM manipulation, listen to DOM Events, delay Execution, caching and DB storage on the browser

    To see what the Web API can provide we can access window

    Web API's are Asynchronous

*/

// Example

setTimeout(() => {
  // Do something
}, 1000);

/*
    setTimeout() is from the Web API so the JS Engine will had this over to the WebAPI, once the time out is complete, the web API will send all the data and functions to the Callback Queue

    When the event loop sees that the Call stack is free the event loop will take the callback and pass it over to the call stack
*/

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// Output = 1,3,2

/*
    Event Loop
    This is a loop that is checking if the Call Stack is empty.

    The event loop on starts to run once the whole js file has been read and the call stack is empty.

    Phillip Roberts has a talk about the event loop which is more indepth, there is also a visual representation at latentflip.com
*/
