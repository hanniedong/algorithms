const fs = require("fs");

process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    inputString += chunk;
  }
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});

const readline = () => {
  return inputString[currentLine++];
};

const main = () => {
  const arCount = parseInt(readline(), 10);
  const ar = readline()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));
  const result = bigSum(ar);
  fs.writeFile("output.txt", result, err => {
    if (err) throw "Error!";
  });
};

const bigSum = array => {
  return array.map(number => parseFloat(number)).reduce((a, b) => a + b);
};
