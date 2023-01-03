/*
    Memory Heap 
    - This is a place to store and write information
    - Here we use, allocate and release memory
    - Large area to allocate variables
    - Objects, Arrays and Functions are stored in memory heaps

    Call Stack
    - Keeps track of where we are in the code
*/

const number = 610; // Allocate memory for number

const string = "Lorem ipsum"; //Allocate memory for string variable

const human = {
  first: "Jordan",
  last: "Wilson",
}; // Allocate memory for an object... and it's values



// -- Callstack
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;

  return subtractTwo(sumTotal);
}

calculate();

/*
    Callstack 
    - Works on a First In Last Out
    - Stores functions and variables as the code executes
    - Multipe stacks are called a frame
    - The callstack reference datas from the memory heap
    - Simple variables can be stored in the stack
    - What ever is on top is where JS is running
*/

/* 
    Stack Overflow
    In the example below we will be calling the function within itself to try create a stack overflow, this technique of calling the function inside of it's self is known as Recursion
*/

function inception() {
    inception();
}  