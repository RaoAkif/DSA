// Start with your code from LinkedList challenge
arr = [];

class Queue {
  add(number) {
    // your code here
    arr.push(number);
  }
  
  remove() {
    // your code here
    if (arr.length === 0) {
      return -1;
    } return arr.shift();
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
