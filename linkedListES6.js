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
  
  palindrome(){
    let string = '';
    let current = this.head;
    while (current <= this.tail){
      string += current.data;
      current = current.next;
    }
    let middle = Math.ceil(string.length / 2);
    let stringOne = string.slice(0, middle);
    let stringTwo = string.slice(middle, string.length).split('').reverse().join('');
    return stringOne === stringTwo
  }
  
  
  find(data){
    let currentNode = this.head;
    while(currentNode !== this.tail){
      if(currentNode.data === data){
        return true;
      }else{
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  
  removeDups(){
    let hash = {};
    let previousNode = this.head;
    let currentNode = this.head.next;
    while(currentNode !== null){
      if(!hash[currentNode.data] ){
        hash[currentNode.data] = true;
      }else{
        previousNode.next = currentNode.next;
        this.count --
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    console.log(hash)
  }

  returnKthToLast(position){
    let currentNode = this.head;
    let index = this.length - position
    let count = 0
    while(count < index){
      count ++ ;
      currentNode = currentNode.next
    }
    return currentNode.data;
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

  remove(data){
    let currentNode = this.head;
    let previousNode;
    if(currentNode.data === data){
      this.head = currentNode.next;
    }else{
      while(currentNode.data !== data){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.count--; 
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

