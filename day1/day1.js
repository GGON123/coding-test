// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");

// const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");
// const n = parseInt(input[0].trim());
// let answer = "";

// for (let i = 1; i < n + 1; i++) {
//   const tmp = input[i].trim().split(" ");
//   answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
// }
// console.log(answer);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = "";
rl.on("line", (line) => {
  const input = line.split(" ");

  if (input.length === 2) {
    answer += parseInt(input[0]) + parseInt(input[1]) + "\n";
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});

// -----------------------------------------------------------------
