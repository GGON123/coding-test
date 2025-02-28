const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  const a = Number(input[0]);
  const b = Number(input[1]);
  if (a > -100001 && a < 100001 && b > -100001 && b < 100001) {
    console.log(`답:`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
  } else {
    console.log(`입력값이 제한 범위를 벗어났습니다.`);
  }
});
