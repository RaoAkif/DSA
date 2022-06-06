class Node {
  constructor(previousValue, value, next_node = null) {
    this.previousValue = value;
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
 constructor(){
   this.arr = [];
 }

  add(number) {
    // your code here
    const node = new Node();
    if(this.arr)
  }

  get(index) {
    // your code here
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
