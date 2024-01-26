function positiveSum(arr) {
  return arr.reduce( (acc, crr) => crr > 0 ? acc+=crr : acc, 0 )
}

https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript