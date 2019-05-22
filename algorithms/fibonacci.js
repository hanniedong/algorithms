const fibonacci = number => {
  if (number === 1) return 0;
  if (number === 2) return 1;
  let b = 1;
  let a = 0;
  while (number > 2) {
    let temp = b;
    b = b + a;
    a = temp;
    number--;
  }
  return b;
};

console.log(fibonacci(5));

const fibonacciRecursive = number => {
  if (number === 1) return 0;
  if (number === 2) return 1;
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

console.log(fibonacciRecursive(5));
