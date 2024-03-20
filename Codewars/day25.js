function highAndLow(numbers){
  let numArr = numbers.split(' ').map(x => Number(x))
  let high = numArr[0]
  let low = numArr[0]
  numArr.forEach(x => {
    if(x>high){high = x}
    if(x<low){low = x}
  })
  return high + " " + low
}

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript