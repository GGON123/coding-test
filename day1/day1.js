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

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let answer = "";
// rl.on("line", (line) => {
//   const input = line.split(" ");

//   if (input.length === 2) {
//     answer += parseInt(input[0]) + parseInt(input[1]) + "\n";
//   }
// }).on("close", () => {
//   console.log(answer);
//   process.exit();
// });

// -----------------------------------------------------------------

// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "input.txt");
// const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

// const totalCount = parseInt(input[0].trim());
// const N = parseInt(input[1].trim());

// let result = 0;
// for (let i = 2; i < N + 2; i++) {
//   const tmp = input[i].trim().split(" ");
//   result += parseInt(tmp[0]) * parseInt(tmp[1]);
// }
// console.log(result === totalCount ? "Yes" : "No");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const totalCount = parseInt(input[0].trim());
  const N = parseInt(input[1].trim());

  let result = 0;
  for (let i = 2; i < N + 2; i++) {
    const tmp = input[i].split(" ");
    result += parseInt(tmp[0]) * parseInt(tmp[1]);
  }

  console.log(result === totalCount ? "Yes" : "No");
  process.exit();
});
