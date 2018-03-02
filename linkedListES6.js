class Node {
  constructor(data){
    this.data= data;
    this.next= null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get length(){
    return this.count;
  }

  printItems(){
    let string = '';
    let current = this.head;
    while (current <= this.tail){
      string += current.data;
      current = current.next;
    }
    console.log(string)
  }
  
  
  addAt(data, element){
    let current = this.head;
    while(current) {
      if(current.data === element) {
        let node = new Node(data);
        if(current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
        }
      this.count++;
      }
      current = current.next;
    }
  }
  addLast(data){
    let node = new Node(data);
    if(this.count === 0 ){
      this.head = node;
    }else{
      this.tail.next = node;
    }
    this.tail = node
    this.count++;
  }

  addFirst(data){
    let node = new Node(data);

    const temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.count ++;
    if(this.count ===1){
      this.tail = this.head;
    }
  }

  removeFirst(){
    if(this.count > 0){
      this.head = this.head.next;
      this.count --;
    }
    if(this.count === 0){
      this.tail = null;
    }
  }
  removeLast(){
    if(this.count > 0 ){
      if(this.count ===1){
        this.head = null;
        this.tail = null;
      }else{
        let current = this.head;
        while(current.next !== this.tail){
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.count --
    }
  }
}

let list = new LinkedList();
list.length;
list.addFirst(5)
list.addLast(3)
list.length;
list.printItems();

