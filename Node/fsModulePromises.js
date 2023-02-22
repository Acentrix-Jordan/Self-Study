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
