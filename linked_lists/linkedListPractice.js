class Node {

  constructor(){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addLast(data){
    let node = new Node(data);
    if(this.head === null){
      this.head = node;
    }else{
      this.tail.next = node;
    }
    this.tail = node;
    this.length++
  }

  addFirst(data){
    let node = new Node(data);
    if(this.head === null){
      this.head = node;
    }else{
      this.head.next = this.head;
      this.head = node;
    }
    this.length++
  }
}