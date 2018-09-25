class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count === 0;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.lowestCount--;
    return result;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
}

function palindromeCheck(string) {
  if (
    string === undefined ||
    string === null ||
    (string !== null && string.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = string
    .toLocaleLowerCase()
    .split("")
    .join("");
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual === true) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}
