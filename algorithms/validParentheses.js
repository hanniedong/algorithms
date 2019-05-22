/* 
Create a Stack data structure
Create a new Stack
Iterate through string 
  Push left bracket 
  If right bracket mirrors left bracket, delete left
If there's brackets remaining in Stack, string is not valid
*/

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(item) {
//     this.items.push(item);
//   }

//   pop() {
//     this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }
// const validParentheses = string => {
//   const stack = new Stack();
//   const brackets = { "(": ")", "{": "}", "[": "]" };
//   const leftBrackets = Object.keys(brackets);
//   const rightBrackets = Object.values(brackets);
//   for (let i = 0; i < string.length; i++) {
//     if (leftBrackets.includes(i)) {
//       stack.push(i);
//     }
//     if (rightBrackets.includes(i)) {
//       const leftBracket = stack.peek();
//       const key = leftBrackets.filter(
//         leftBracket => bracket[leftBracket] === i
//       );
//       if (leftBracket === key) {
//         stack.pop();
//       } else {
//         stack.push(i);
//       }
//     }
//   }
//   return stack.isEmpty();
// };

// {}[]()
// (({}))
const validParentheses = array => {
  const parenthesesMap = { "(": ")", "{": "}", "[": "]" };
  const leftBrackets = Object.keys(parenthesesMap);
  const rightBrackets = Object.values(parenthesesMap);
  const stack = [];
  array.forEach(parenthesis => {
    if (leftBrackets.includes(parenthesis)) {
      stack.push(parenthesis);
    }
    if (rightBrackets.includes(parenthesis)) {
      if (
        stack[stack.length - 1] ===
        Object.keys(parenthesesMap).find(
          key => parenthesesMap[key] === parenthesis
        )
      ) {
        stack.pop();
      }
    }
  });
  return stack.length === 0;
};

console.log(validParentheses("()".split("")));
