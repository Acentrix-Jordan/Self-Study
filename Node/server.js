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
