const fs = require("node:fs");

// Micro task Queue
Promise.resolve().then(() => {
	console.log("This is Promise.resolve 1");
});

process.nextTick(() => {
	console.log("This is process.nextTick 1");
});

// Timer Queue
// We can use setTimeout or setInteval
setTimeout(() => {
	console.log("Set Timeout");
	process.nextTick(() => {
		console.log("inner Timeout");
	});
}, 0);

setTimeout(() => {
	console.log("Timeout 2");
});

// I/O Queue
// Most of the built in async methods in Node are called in the I/O Queue
fs.readFile(__filename, () => {
	console.log("This is called in the I/O Queue");
});

process.nextTick(() => {
	console.log("Next tick post I/O Event");
});

// There is no gurantee Timer Queue functions will return before the I/O Queue methods

// Check Queue

setImmediate(() => {
	console.log("Check Queue");
});
