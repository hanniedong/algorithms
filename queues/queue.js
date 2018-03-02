class Queue{
  constructor(){
    this.collection = [];
  }
  
  print(){
    console.log(collection);
  }
  
  enqueue(element){
    collection.push(element);
  }
  
  dequeue(element){
    return collection.shift();
  }
  
  front(){
    return collection[0];
  }
  
  size(){
    return collection.length;
  }
  
  isEmpty(){
    return(collection.length ===0);
  }
}