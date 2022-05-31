module.exports = function () {
  // write your code here
  let FizzBuzzArray = [];
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      FizzBuzzArray.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      FizzBuzzArray.push("Buzz");
    } else if (i % 15 === 0) {
      FizzBuzzArray.push("FizzBuzz");
    } else {
      FizzBuzzArray.push(i);
    }
  }
  return FizzBuzzArray;
};
