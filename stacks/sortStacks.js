class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
  }
  
  get length(){
    return this.count;
  }
  
  sort(){
    let temporaryStack = new Stack();
    while(this.length !== 0){
      let value = this.pop();
      while(temporaryStack.length !== 0 && temporaryStack.peek() > value){
        this.push(temporaryStack.pop())
      }
      temporaryStack.push(value)
    }
    while(temporaryStack.length !==0){
      this.push(temporaryStack.pop())
    }
  }
  
  
  push(item){
    this.items.push(item);
    this.count++
  }
  
  pop(){
    if(this.count >0){
      this.count--
    }
    return this.items.pop();
  }
  
  peek(){
    return this.items[this.count -1];
  }
}

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);
stack.sort();
console.log(stack)