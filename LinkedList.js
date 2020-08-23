class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head); // create a newNode with data, and the next value is the current start of the list
    this.head = newNode; // replace the start of the list with newNode
    this.length++; // because you added a new element, the length increases by 1
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;