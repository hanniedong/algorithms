class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
    this.min = [];
  }
  
  isEmpty(){
    this.count === 0;
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