// Javascript Engine

// Below we have declared a variable
const isHappy = true;

/* 
But how does the computer understand the JS Code.

JS uses an 'Engine', which converts all our JS code into machine code (1's and 0's)

There isn't just a singluar engine used. There are quite a few and these engines are also known as ECMAScript Engines

One of the most popular engines used is Google's V8 Engine which is used in Google Chrome, Node.js and V8.NET

2008 was a turning point for JS as this is when Google released V8 to help power Google Maps.

The first JS Engine was SpiderMonkey which is used on Firefox

--- INSIDE THE ENGINE ---

When we pass a JS File to the an engine, the first thing it does it called lexical analysis.

This breaks the code into 'tokens' to identify their meaning, so we know what the code is trying to do.

These tokens are then formed into an AST (Abstract Syntax Tree)

Once the AST is generated it then goes through either an interpreter, Profiler or Compiler.

If it goes through an interpretor it then generates Bytecode.

However if it goes through a Profiler/Compiler, it then generates Optimized code.

Quick Overview:
1. Parse the Code
2. Generate AST
3. Go through either Interpreter, Profiler/Compiler.
4. -- Interpreter generates Bytecode
4. -- Profiler / Compiler generates Optimized code

To stop everyone creating there own JS Engines, ECMAScript was formed.

ECMAScript is the governing body of JS and sets the standards for the engines


--- Interpreter vs Comipler ---
An interpreter translates and reads the file line by line
*/

// Code Example

function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5, 4);
}

/*

An interpreter will keep going back and through to the last reference.

Whereas a Compilier generates all the machine code ahead of time.

A compiler tries to understand what we want it to do. Compilers are more common in Lower Level Languages.


Interpreters executes straight away as it is read line by line.

However it is not as efficent when loops are involved as a compiler will simplify and optimize our code.

-- Compliers are slow to get running, but optimize our code. 

-- Interpretors are fast to get started but no not optimize our code.

To get the best of both worlds engineers were able to combine the two to create a Just-In-Time Compiler (JIT Compiler)

--- Googles V8 JIT Compiler ---

1. Parse our code
2. Create an AST (Abstract Syntax Tree)
3. Go to the Interpreter (Called Ignition)
-- Takes in AST and spits out Bytecode

4. Next the Profiler monitors and watches our code as it goes through the interpreter and makes notes on how to optimize the code.

Example:
- How often something is used
- What Types of used

If the profiler finds code that can be optimised it will pass it to the compiler and replaces the sections fo byte code with optimised code.

V8 Compiler is called TurboFan

Even though we don't need to know anything about how engines work to write JS code, it does help with the optimization as it is possible for the compilier to go in the opposite direction and deoptimize code if our written code is not efficient.
*/
