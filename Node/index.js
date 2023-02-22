const fs = require("node:fs");

// Crypto provide cryptography
const crypto = require("node:crypto");

// Common method used to hash passwords in node
// crypto.pbkdf2()

const start = Date.now();
crypto.pbkdf2("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);
