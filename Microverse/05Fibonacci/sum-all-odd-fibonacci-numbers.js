module.exports = function (num) {
  // write your code here

  let fibNums = [1,1];
  let fibSum = fibNums[fibNums.length-2] + fibNums[fibNums.length-1];

  while(fibSum <= num){
    fibNums.push(fibSum);
    fibSum = fibNums[fibNums.length-2] + fibNums[fibNums.length-1]
  }

  return fibNums.filter(fib => (fib % 2 != 0)).reduce((a, b) => a + b)
};

///6

//1
//3
//5
