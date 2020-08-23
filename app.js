const LinkedList = require("./LinkedList");

const ll = new LinkedList(); // create new empty linked list

ll.insertAtHead(10); // linked list with one element of ten
console.log(ll);
ll.insertAtHead(20); // linked list with two elements: first is 20 and second is 10

console.log(ll);
