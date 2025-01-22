function isValid(s) {
  let stack = []
  let sarray = s.split('')
  let hmap = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  for (let k in sarray) {
    if (hmap[sarray[k]] && sarray[k - 1] === hmap[sarray[k]]) stack.pop()
    else if (hmap[sarray[k]]) return false
    else stack.push(sarray[k])
  }
}

console.log(isValid('([{}])'))
console.log(isValid('(([{}])'))
