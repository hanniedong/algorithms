class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  get length(){
    return this.count;
  }

  addLast(data){
    let node = new Node(data)
    if(this.count){
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }else{
      this.head = node;
      this.tail = node;
    }
    this.count++
  }

}