const LinkedList = require("./LinkedList");

// const ll = new LinkedList(); // create new empty linked list

// ll.insertAtHead(10); // linked list with one element of ten
// console.log(ll);
// ll.insertAtHead(20); // linked list with two elements: first is 20 and second is 10

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.print();
console.log(ll.getByIndex(2).value);
ll.insertAtIndex(2, 60);
ll.print();
