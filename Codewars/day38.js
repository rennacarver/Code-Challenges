var isSquare = function(n){
  if (n<0) return false
  if (n===0) return true
  for (let i = 1; i<= Math.sqrt(n); i++){
    if (i*i === n) return true
  }
  return false
}

https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

/*less silly solutions

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));


*/