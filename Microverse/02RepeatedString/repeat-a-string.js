function repeatStringNumTimes (str, num) {
// repeat str num times
// let newStr = '';

// if(num <= 0) {
//     return newStr;
// }

// for(let i = 1; i <= num; i++){
//      newStr += str;
//      console.log(newStr)
// }

// return newStr;









// function repeatStringNumTimes (str, num) {


//repeat given string
// reppeat given string num times 
//return empty string if num is less than 0
//eg if string = A and Num = 3 , return AAA

// let newStr = '';

// // let count = 0; 
// //1 str
// //2 str + str 
// //3 str + str + str


// for( let i = 1; i <= num; i++ ) { 
//     if( num >= 1 ) {
//         console.log(newStr += str)
//     }
//     else if( num <= 0 ) { 
//          console.log(newStr)
//     }   
// }

// return newStr;





//repeat given string
// reppeat given string num times 
//return empty string if num is less than 0
//eg if string = A and Num = 3 , return AAA





// let newStr = '';

// for( let i = 1; i <= num; i++ ) { 
//     if( num > 0 )  { 
//         newStr += str 
//     }
//     else if( num <= 0 ) { 
//         newStr
//     }
// }

// return newStr;

















//repeat a string, num times
// return a empty string if num is not a positive number
// 
let newStr = '';

for( let i = 1; i <= num; i++ ) { 
    if( num < 0 ) { 
        newStr;
    }
    else if( num > 0 ) { 
        newStr += str;
    }
}

return newStr;























}
module.exports = repeatStringNumTimes;
