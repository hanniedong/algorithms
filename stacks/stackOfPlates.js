class stackOfPlates{
  constructor(){
    this.count = 0;
    this.capacity = 4;
  }
  
  push(item){
    if (this.count === this.capacity || this.count === 0){
      this.count = 0;
      let stack = new Stack();
      
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

class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
    this.min = [];
  }
  
  getMin(){
    return this.min[this.min.length - 1];
  }
  
  getLength(){
    return this.count;
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