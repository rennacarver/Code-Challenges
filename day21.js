function reverseWords(str) {
  let arr = str.split(' ')
  let revArr = arr.map((x) => x.split("").reverse().join(''))
  return revArr.join(' ')
}

https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript