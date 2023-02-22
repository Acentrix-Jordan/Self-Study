# Create a Node Server

## Boiler Plate

```
const http = require("node:http");

const server = http.createServer((req, res) => {
	// HTTP success response
	// .writeHead(ResponseCode, ContentTypeOfResponse)
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello World");
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});

```

## Sending JSON Data

```
const server = http.createServer((req, res) => {
	const superHero = {
		firstName: "Bruce",
		lastName: "Wayne",
	};

	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(superHero));
});
```
