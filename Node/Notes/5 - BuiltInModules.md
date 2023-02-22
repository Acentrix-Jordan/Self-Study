# Built-in Modules

These are modules that are shipped with NodeJS, they can also be referred to as Core Modules.

These Modules include:

-   path
-   events
-   fs
-   stream
-   http

# Path Module

The path module provides utilites for working with file and directory paths

To use path we need to import it

```
const path = require("node:path");
```

## path.basename

This returns the last part of the file / dirname

```
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
```

## path.extname

Returns the file extension

```
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
```

## path.parse

Returns our path as an object

```
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
```

## path.parse

Returns an object as a string

```
console.log(path.format(path.parse(__filename)));
console.log(path.format(path.parse(__dirname)));
```

## path.isAbsolute

Returns whether the path is an absolute path;

console.log(path.isAbsolute(**filename));
console.log(path.isAbsolute(**dirname));

## path.join

Returns strings has platform specific paths

```
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join(__dirname, "data.json"));
```

## path.resolve

returns path segments into an absolute path

```
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve(__dirname, "data.json"));
```

# Callbacks

In JS, functions are first class objects, this means a function can be passed as an argument to a function and a function can also be reutrned as values from other functions.

```
function greet(name) {
	console.log(`Hello ${name}`);
}

function greetJordan(callback) {
	const name = "Jordan";
	callback("Jordan");
}

greetJordan(greet);

```

## Types of Callbacks

### Synchronous

A callback that is executed immedietly

The above function is an example of a synchronous callback.

array methods such as:

-   .sort()
-   .filter()
-   .map()

Are all synchronous callback functions

### Asynchronous

A callback that is used to continue or resume code execution after another operation has completed

Callbacks are used to delay the execution of functions

Most modules in NodeJS have an asychronous nature to prevent execution blocking

Examples of when to use Asychronous Functions:

-   Reading data
-   Fetching data
-   Handling a network request

.addEventListener is an asychronous function

# Events Module

This allows us to work with events in NodeJS

An event is an action or an occurence in our application we can respond to

Using the events module, we can dispatch our own events and respons to those custom eventss in a non-blocking manner

```
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Listen
emitter.on("Order Pizza", (arg1, arg2) => {
	console.log("Order Recieved");
	console.log(arg1);
	console.log(arg2);
});

emitter.on("Order Pizza", (arg1) => {
    if(arg == 'Large'){
        console.log('Free Drink Offer')
    }
});

// Dispatch
emitter.emit("Order Pizza", "Large", "Mushroom");
```

# Events Extended

We can create a class and extend our events to the clas

PizzaShop.js

```
const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
	constructor() {
		super();
		this.orderNumber = 0;
	}

	order(size, topping) {
		this.orderNumber++;
		this.emit("Order", size, topping);
	}

	displayOrderNumber() {
		console.log(`Current order number: ${this.orderNumber}`);
	}
}

module.exports = PizzaShop;
```

Index.js

```
const PizzaShop = require("./pizzaShop");

const myPizzaShop = new PizzaShop();

myPizzaShop.on("Order", (size, topping) => {
	console.log(`Pizza Order: ${size}, ${topping}`);
});

myPizzaShop.order("Large", "Meatfeast");

myPizzaShop.displayOrderNumber();
```

# Character Sets and Encoding

## Binary Data

0's and 1's

1 - 1
2 - 10
3 - 11
4 - 100
5 - 101
6 - 110
7 - 111
8 - 1000
9 - 1001
10 - 1010

Computers will first convert the character to a number, then convert the number into its binary representation.

we can use .charCodeAt();

## Character Sets

Two most common character sets are:

-   Unicode
-   ASCII

## Character Encoding

This dictates how to represent a character set as binary data before it can be stored in a computer

It dictates how many bits to use to represent a number

Example character encoding system is UTF-8

UTF-8 stats that characters should be encoded in bytes (8 bits)

# Streams and Buffers

## Streams

-   A stream is a sequence of data that is being moved from one point to another over time

In NodeJS we want to process streams of data in chunks as they arrive instead of waiting for the entire data to be availble for processing

## Buffers

-   NodeJs cannot control the pace at which data arrives in the stream, it can only decide when it should send the data for processing

-   If there is data already being processed or there is too little data, Noode puts the arriving data in a buffer

-   This buffer is a small area that Node maintains during runtime to process a stream of data

NodeJS has a global variable we can use to access our buffer.

```
// Create Buffer
const buffer = new Buffer.from("Jordan", "utf-8");

console.log(buffer.toJSON());

// Output
// {
//     type: 'Buffer',
//     data: [ 74, 111, 114, 100, 97, 110 ]
// }

console.log(buffer);
// Output
// <Buffer 4a 6f 72 64 61 6e>

```

# fs Module

-   This is a file system (fs) module that allows us to work with the file system on our computer / server

```
const fs = require("node:fs");

// Sychronous function
const file = fs.readFileSync("./buffer.js", "UTF-8");
console.log(file);

// Asychronous function
fs.readFile("./main.mjs", "utf-8", (error, data) => {
	// UTF-8 Parameter is optional
	if (error) {
		console.log(error);
		return;
	}

	console.log(data);
});

// Creates File Sychronously
fs.writeFileSync("./greet.txt", "Hello World");

fs.writeFile("./test.txt", "Hello Async", (error, data) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log(data);
});

```

Without the UTF-8 parameter, we will receive the hex code.

By default writeFile, will overwrite existing data

The callbacks are error first functions, so the first parameter is the error recieved

# fs Promise Module

This is a new version of the fs Module

```
const fs = require("node:fs/promises");

fs.readFile("test.txt", "utf-8")
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.log(error);
	});

async function readFile() {
	try {
		const data = await fs.readFile("test.txt", "utf-8");
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

readFile();

```

Note that the orginal fs module is faster and more efficient, however for smaller projects.

Keep in mind fs.promises is not a complete replacement for fs. It's an alternate (promise-based) interface for some (but not all) of the methods in the fs module.

# Streams and Pipes

Streams extend from the eventEmitter class

```
const fs = require("node:fs");

const readableStream = fs.createReadStream("./test.txt", {
	encoding: "utf-8",
	highWaterMark: 2, // Deal with data in 2 bytes at a time
});

const writeableStream = fs.createWriteStream("./test-2.txt", {
	encoding: "utf-8",
});

readableStream.on("data", (chunk) => {
	console.log(chunk);
	writeableStream.write(chunk);
});

```

## Types of Streams

-   Readable streams (Read Data)
-   Writeable streams (Write Data)
-   Duplex Streams (Read and Write Data)
-   Transform Streams (Modify/Transform data as it is written/read)

RS Example:
Reading a file

WS Example:
Writing to a file

DS Example:
Sockets

TS Examples:
File Compression

## Pipes

-   A pipe takes a readable stream to a writable stream

We can convert

```
readableStream.on("data", (chunk) => {
	console.log(chunk);
	writeableStream.write(chunk);
});
```

Into

```
readableStream.pipe(writableStream);
```

Pipes return the destination stream which allows chaining. However to use chaining the destination stream has to be Readable, Duplex or Transform Stream

# HTTP Module

We can create a web server using NodeJS

NodeJS has access to the operating system functionality such as networking

Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests
