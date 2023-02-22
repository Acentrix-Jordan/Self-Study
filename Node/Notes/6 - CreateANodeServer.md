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

## Sending HTML

```
const http = require("node:http");

const server = http.createServer((req, res) => {
	// HTTP success response
	// .writeHead(ResponseCode, ContentTypeOfResponse)
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("<h1>Hello World</h1>");
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});

```

## Sending Static HTML File

```
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });

	fs.createReadStream(__dirname + "/index.html").pipe(res);
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});
```

## Sending Dynamic HTML File

### index.js

```
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	const name = "Jordan";

	res.writeHead(200, { "Content-Type": "text/html" });
	let html = fs.readFileSync("./index.html", "utf-8");
	html = html.replace("{{name}}", name);
	res.end(html);
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});

```

### index.html

```
<body>
	<h1>Hello {{name}}, welcome to Node.js</h1>
</body>
```

## HTTP Routing

The request contains information from the user, including the url query string.

We can access this using `req.url`

```
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("Home Page");
			break;
		case "/about":
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("About Page");
			break;
		case "/api":
			const data = fs.readFileSync(__dirname + "/data.json");
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(data);
			break;
		default:
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("404: Error Page Not Found");
	}
});

// .listen(PortNumber, Callback)
server.listen(3000, () => {
	console.log("Server running on port 3000");
});

```

We can also access the post method, such as GET, POST, PUT, DELETE using

```
req.method
```
