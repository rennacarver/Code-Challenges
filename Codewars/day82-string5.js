function getCount(str) {
  let arr = str.split('')
  let count = 0
  
  for (k in arr) {
    if (arr[k].match(/[aeiou]/)){
      count++
    }
  }
  return count
}

https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript