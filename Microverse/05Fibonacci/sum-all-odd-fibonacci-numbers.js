module.exports = function (num) {
  let fibSum; //2
  let prev;//  1
  let current = 1; //2
  for(let i = 1; i <= num; i += 1) {

    fibSum = prev + current
    console.log(typeof(fibSum))
    prev = current
    current = fibSum
  }
  return fibSum
};
