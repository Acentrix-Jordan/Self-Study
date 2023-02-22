const fs = require("node:fs");

// readFileSync = sychronous function
const file = fs.readFileSync("./buffer.js", "UTF-8");

console.log(file);

// readFile = asychronous function
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

// Create File Asychronously
fs.writeFile("./test.txt", "Hello Async", { flag: "a" }, (error, data) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log(data);
});
