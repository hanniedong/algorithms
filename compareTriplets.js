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

function readLine() {
  return inputString[currentLine++];
}

process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});

const main = () => {
  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));
  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);
  process.stdout.write(result.toString());
};

const compareTriplets = (a, b) => {
  let counterA = 0;
  let counterB = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) counterA++;
    if (b[i] > a[i]) counterB++;
  }
  return [counterA, counterB];
};
