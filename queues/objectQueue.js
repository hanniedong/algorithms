class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //adds new elements to queue
  //count is used as key and element is the value
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //verify if queue is empty
  //if queue is not empty, store the value from the front of the queue and return after it has been removed
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return his.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.size());
