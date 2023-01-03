/*
    Garbage Collection
    - JS is a garbage collected language
    - When JS allocates memory.

    Example: Once an object has been refereneced and it is no longer needed. JS automatically frees up the space where the Object is stored so it can be overwritten with a new value.

    The garbage collected works on the memory heap and is a technique to try prevent Memory Leaks.

    Usually gives dev's false sense of security.

    In low level language you control garbage collection. (C, C#)

    JS uses the Mark and Sweep algorithm for garbage collection.
*/

/*
    Memory Leaks
    Below we have created an infinite loop to simualate a memory leak
*/
let array = [];

for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

/*
    3 Common memory leaks
*/

// - Global Variables
var a = 1;
var b = 2;

// - Event Listeners
var element = document.getElementById("button");

let onClick = () => console.log("x");

element.addEventListener("click", onClick);

// - setInterval
setInterval(() => {
    // reference objects...
})