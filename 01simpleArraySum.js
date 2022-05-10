function simpleArraySum(ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i += 1) {
    total += ar[i];
  }
  return total;
}

function simpleArraySum(ar) {
  let total = 0;
  for (let i of ar) {
    total += i;
  }
  return total;
}

function simpleArraySum(ar) {
  let total = 0;
  ar.map((el)=> total+= el)
  return total
}

function simpleArraySum(ar) {
  let total = ar.reduce((prev, curr) => prev + curr);
  return total
}

function simpleArraySum(ar) {
  return ar.reduce((prev, curr) => prev + curr); 
}

const simpleArraySum = ar => ar.reduce((prev, curr) => prev + curr);