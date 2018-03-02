class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
    this.min = [];
  }
  
  get length(){
    return this.count;
  }
  
  getMin(){
    return this.min[this.min.length - 1];
  }
  
  push(item){
    let min = this.getMin();
    this.items.push(item);
    this.count++
    
    if (min === undefined || min >= item){
      this.min.push(item);
    }

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

class MyQueue{
  constructor(){
    this.newStack = new Stack();
    this.oldStack = new Stack();
  }
  
  get length(){
    return (this.newStack.length + this.oldStack.length);
  }
  
  enqueue(element){
    this.newStack.push(element);
  }
  
  dequeue(){
    if(this.oldStack.length === 0){
      while(this.newStack.length !== 0){
        let element = this.newStack.pop();
        this.oldStack.push(element);
      }
    }
  return this.oldStack.pop();
  }
  
  peek(){
    return this.oldStack.peek();
  }
}

let queue = new MyQueue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.peek())