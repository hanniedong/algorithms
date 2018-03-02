class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
  }
  
  getLength(){
    return this.count;
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