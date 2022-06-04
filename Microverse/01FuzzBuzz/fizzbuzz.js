module.exports = function () {
  // write your code here
  //print nums from 1 to 100 
  //mulitples of 3 print Fizz 
  //multiples of 5 print Buzz
  // mulitples of 3 && 5 print FizzBuzz
// return result in array 

let arr = []; 
for(let i = 1; i <=100; i++){
  if(i % 3 === 0 && i % 5 !== 0){
    arr.push('Fizz')
  } else if( i % 5 === 0 && i % 3 !== 0){
    arr.push('Buzz')
  } else if(i % 15 === 0){
    arr.push('FizzBuzz')
  } else {
    arr.push(i)
  }
} return arr;

};
