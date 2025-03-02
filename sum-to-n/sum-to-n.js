// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");
// const input = fs.readFileSync(filePath, "utf-8").toString();

// let result = 0;
// for (let i = 1; i < parseInt(input) + 1; i++) {
//   result += i;
// }
// console.log(result);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = 0;
rl.on("line", (line) => {
  for (let i = 1; i < parseInt(line) + 1; i++) {
    result += i;
  }
}).on("close", () => {
  console.log(result);
});
