function fibonacci(number){
  let a = 0;
  let b = 1;
  let temp;
  
  while(number > 2){
    temp = b;
    b = b + a;
    a = temp;
    number--
  }
  return b;
}

function fibonacciRecursive(number){
  if(number === 1) return 0;
  if(number === 2) return 1;
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 1)
}

console.log(fibonacciRecursive(3))
console.log(fibonacci(6))