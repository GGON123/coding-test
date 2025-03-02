// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");
// const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

// const nums = input[1].split(" ").map((num) => parseInt(num));

// const max = Math.max(...nums);
// const min = Math.min(...nums);

// console.log(`${min} ${max}`);

//--------------------------------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const nums = input[1].split(" ").map((num) => parseInt(num));
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  console.log(`${min} ${max}`);
  process.exit();
});
