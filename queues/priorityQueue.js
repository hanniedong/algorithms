class PriorityQueue{
  constructor(){
    this.collection = [];
  }
  
  print(){
    console.log(collection);
  }
  
  enqueue(element){
    if(this.isEmpty()){
      collection.push(element);
    } else{
      let added = false;
      for( let i = 0 ; collection.length; i++){
        if(element[1] < collection [i][1]){
          collection.splice(i,0,element);
          added = true;
          break;
        }
      }
      if(!added){
        collection.push(element);
      }
    }
  }
  
  dequeue(element){
    let value = collection.shift();
    return value[0];
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

let pq = new PriorityQueue();
pq.enqueue(['Yas', 2]);
pq.enqueue(['Boo', 3]);
pq.enqueue(['Yas', 1])