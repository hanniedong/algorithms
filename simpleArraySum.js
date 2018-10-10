const fs = require("fs");

process.stdin.setEncoding("utf8");

let inputString = "";
let currentLine = 0;

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    inputString += chunk;
  }
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function simpleArraySum(ar) {
  return ar.reduce((a, b) => a + b);
  /*
   * Write your code here.
   */
}

function main() {
  const arCount = parseInt(readLine(), 10);
  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));
  let result = simpleArraySum(ar);
  process.stdout.write(result.toString());
}
