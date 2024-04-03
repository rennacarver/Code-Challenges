function digitize(n) {
  let reverseStr = String(n).split('').reverse()
  return reverseStr.map( (x) => Number(x))
}

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript