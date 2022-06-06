// Optionally: start with your code from LinkedList challenge.
const arr = [];

class Stack {
  push(number) {
    // your code here
    arr.push(number)
  }
  
  pop() {
    // your code here
    arr.splice(arr.length-1, 1)
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
