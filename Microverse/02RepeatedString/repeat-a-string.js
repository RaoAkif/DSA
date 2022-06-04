function repeatStringNumTimes (str, num) {
// repeat str num times
let newStr = '';

if(num <= 0) {
    return newStr;
}

for(let i = 1; i <= num; i++){
     newStr += str;
     console.log(newStr)
}

return newStr;
}
module.exports = repeatStringNumTimes;
