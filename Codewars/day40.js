function count(string) {
  return string
  .split('')
  .reduce( (acc,crr) => {
      acc[crr] = acc[crr] ? acc[crr] + 1 : 1
      return acc
  }, {})
}

https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

