# Course Overview

This is a course I found on youtube that covers Node for beginners.

I am taking this course to further my knowledge in JavaScript and get a better understanding of the JS Ecosystem.

The Course can be found at:

https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=1

## What is Node.js

Node.js is an open source, cross platform Javascript runtime enviroment.

## Why Learn Node.js

1. Build application end to end with JavaScript
2. Utilised by Major Companies such as LinkedIn, Netflix and Paypal.
3. Allows you to be a Full Stack Developer.
4. Huge Node.js Community

## Course Structure

1. Terms and Concepts to understand Node.js
2. Modules (User Defined)
3. Built-in Modules
4. Node.js Internals
5. npm - Node Package Manager
6. Use Node to create CLI Tool
7. Misc

## Next Steps

-   Learn Express.js

# Hello World

First we need to check we have node installed. Go to our terminal enter the following command

```
node -v
```

## Executing Code

### REPL

We can use the node REPL to execute some JS Code in our terminal.

REPL stands for:

-   Read
-   Evaluate
-   Print
-   Loop

To use the REPL we just enter:

```
node
```

To quit the REPL we can use ctrl+c

### Execute Files

We can create an index.js file and run this file using the command

```
node index.js
```

or

```
node index
```

# Browser vs Node.js

In the browser, we are interacting with the DOM or other Web Platform API's, such as Cookies.

In Node we don't have access to these API's provided by the browser

In the browser we don't have access the the Modules that node provides such as the file system functionality

With Node.js we control the enviroment

In the Browser we are at the mercy of the user

## Modules

A modules is an encapsulated and reusable chunk of code that has its own context.

Each file is treated as a seperate module.

## Types of Modules

1. Local Modules - Modules we create in our application
2. Built in Modules - Modules that Node.js ships out of the box
3. Third Party Modules - Modules written by other developers that we can utilise in our application

## Local Modules

Local Modules are the modules WE create in our application

Modules are encapsulated by default so all values and variables are seperate by default

Modules utilise CommonJS
