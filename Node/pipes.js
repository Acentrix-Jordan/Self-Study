const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./test.txt", {
	encoding: "utf-8",
	highWaterMark: 2, // Deal with data in 2 bytes at a time
});

const writeableStream = fs.createWriteStream("./test-2.txt", {
	encoding: "utf-8",
});

readableStream.pipe(writeableStream);

readableStream.pipe(gzip).pipe(fs.WriteStream("./test-2.txt.gzip"));
