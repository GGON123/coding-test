// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");

// const input = fs.readFileSync(filePath, "utf-8").toString().trim();

// console.log(input);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  console.log(line);
  rl.close();
});
