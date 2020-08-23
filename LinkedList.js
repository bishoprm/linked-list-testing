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

  getByIndex(index) {
    // slower than if this was done with an array because linked lists loop through every element, no quick "get element by index" option as with an array
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    const prev = this.getByIndex(index - 1); //get value directly before where to insert
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    prev.next = prev.next.next; //skips over one
    this.length--;
  }

  print() {
    //helper function to show what the list looks like in a bit of a nicer way
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
