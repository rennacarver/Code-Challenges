function isValid(s) {
  let stack = []
  let sarray = s.split('')
  let hmap = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  for (let k in sarray) {
    if (sarray[sarray.length - 1] === hmap[sarray[k]]) {
      stack.pop()
      console.log(sarray[sarray.length - 1])
      console.log('if')
      console.log(stack)
    } else if (hmap[sarray[k]]) {
      console.log('else if')
      console.log(stack)
    } else {
      console.log('else')
      stack.push(sarray[k])
      console.log(stack)
    }
  }
  if (stack.length === 0) return true
}

console.log(isValid('([{}])'))
console.log('-----Example 2-----')
console.log(isValid('(([{}])'))
