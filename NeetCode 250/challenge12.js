function isValid(s) {
  let stack = []
  let sarray = s.split('')
  let hmap = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  for (let k in sarray) {
    if (hmap[sarray[k]] === undefined) stack.push(sarray[k])

    if (stack.length !== 0) {
      if (hmap[sarray[k]] && hmap[sarray[k]] === stack[stack.length - 1])
        stack.pop()
      else return false
    }
  }
  console.log(stack)
}

console.log(isValid('([{}])'))
console.log('-----Example 2-----')
console.log(isValid('(([{}])'))
