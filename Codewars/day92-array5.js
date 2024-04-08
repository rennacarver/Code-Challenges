function findAverage(array) {
  if (array.length === 0) return 0
  let sum = array.reduce((curr, acc) => {
    return acc + curr
  }, 0)
  return sum / array.length
}

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript