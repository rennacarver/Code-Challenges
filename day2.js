function squareSum(numbers){
  let sum = numbers.reduce(function (squaredSum, currVal){
    return squaredSum + Math.pow(currVal, 2)
  }, 0)
  return sum
}

https://www.codewars.com/kata/515e271a311df0350d00000f/forks/javascript