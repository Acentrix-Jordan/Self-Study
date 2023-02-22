const http = require("node:http");

const server = http.createServer((req, res) => {
	const superHero = {
		firstName: "Bruce",
		lastName: "Wayne",
	};

	// HTTP success response
	// .writeHead(ResponseCode, ContentTypeOfResponse)
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(superHero));
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});

// localhost:3000

// LESSON 33
// https://www.youtube.com/watch?v=50YtINv8Y-o&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=33
