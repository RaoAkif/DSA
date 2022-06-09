module.exports = function () {
  // write your code here
  //print nums from 1 to 100 
  //mulitples of 3 print Fizz 
  //multiples of 5 print Buzz
  // mulitples of 3 && 5 print FizzBuzz
// return result in array 

// let arr = []; 
// for(let i = 1; i <=100; i++){
//   if(i % 3 === 0 && i % 5 !== 0){
//     arr.push('Fizz')
//   } else if( i % 5 === 0 && i % 3 !== 0){
//     arr.push('Buzz')
//   } else if(i % 15 === 0){
//     arr.push('FizzBuzz')
//   } else {
//     arr.push(i)
//   }
// } return arr;








// write your code here
  //print nums from 1 to 100 
  //mulitples of 3 print Fizz 
  //multiples of 5 print Buzz
  // mulitples of 3 && 5 print FizzBuzz
// return result in array 




// let result = [];

// for( let i =1; i <= 100; i++) {
//   if( i % 3 === 0 && i % 5 === 0 ) { 
//     result.push('FizzBuzz')
//   }
//   else if( i % 3 === 0 && i % 5 !== 0 ) { 
//     result.push('Fizz');
//   } 
//   else if( i % 5 === 0 && i % 3 !== 0 ) { 
//     result.push('Buzz')
//   }
//   else {
//    result.push(i);
//   }
// }
// return result;















//Print an array of intergers from 1 to 100
//show 'Fizz' for multiples of 3 instead of number
//show 'Buzz' instead of number for multiples of 5
// for multiples of 3 && 5 show 'FizzBuzz' instead of number
// return an array containing the results


let FizzBuzzArray = [];

for( let i = 1; i < 101; i++ ) { 
  if( i % 3 === 0 && i % 5 !== 0 ) {
    FizzBuzzArray.push('Fizz');
  }
  else if( i % 5 === 0 && i % 3 !== 0 ) { 
    FizzBuzzArray.push('Buzz');
  }
  else if ( i % 3 === 0 && i % 5 === 0 ) { 
    FizzBuzzArray.push('FizzBuzz')
  }
  else {
    FizzBuzzArray.push(i)
  }
}
return FizzBuzzArray; 

};