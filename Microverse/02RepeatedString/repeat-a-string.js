function repeatStringNumTimes (str, num) {
  let repeatedString = '';
  if (num <= 0) return '';

  for (let i=1; i<=num; i++) {
    repeatedString = repeatedString + str
  }
  return repeatedString
}

module.exports = repeatStringNumTimes
