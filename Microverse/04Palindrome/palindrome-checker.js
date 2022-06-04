module.exports = function (str) {
  // write your code here

  //remove all non numerical characters 
  // turn to lowercase 
  // create a newstr that will be reverse of str 
let string = str.replace(/[^a-z0-9]/gis, '').toLowerCase();
console.log(string);
let reverseString = str.replace(/[^a-z0-9]/gis, '').toLowerCase().split('').reverse().join('');
console.log(reverseString);

return string === reverseString ? true : false;
}
