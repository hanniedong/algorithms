class setOfStacks{
  constructor(capacity){
    this.capacity = capacity;
    this.stacks = [[]]
  }
  
  push(item){
    if(this.stacks[this.stacks.length - 1].length >= this.capacity){
      this.stacks.push([])
    }
    this.stacks[this.stacks.length - 1].push(value)  
  }
  
  pop(){
    if (this.stacks.length && this.stacks[this.stacks.length - 1].length ===0){
      this.stacks.pop();
    }
    return this.stacks[this.stacks.length - 1].length.pop();
  }
  
  popAt(stackNum){
    let stack = this.stacks[stackNum - 1 ]
    let value = this.stacks[stackNum].pop();
    let nextStack;
    const tempStack = [];

    if(stackNum < this.stacks.length){
      for(let i = stacksNum; i < this.stacks.length; i++){
        nextStack = this.stacks[i];
        while (nextStack.length){
          tempStack.push(nextStack.pop());
        }
        stack.push(tempStack.pop());
      }
      stack = nextStack;
    }
    if (this.stacks.length > 1 && this.stacks[this.stacks.length-1].length === 0) {
      this.stacks.pop();
    }
    return value;
  }
}
