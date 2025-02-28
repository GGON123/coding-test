const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(filePath, "utf-8").toString().trim();

console.log(input);
