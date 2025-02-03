class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = []
    let sarray = s.split('')
    let hmap = {
      '}': '{',
      ']': '[',
      ')': '(',
    }

    for (let k in sarray) {
      if (hmap[sarray[k]] === undefined) {
        stack.push(sarray[k])
        console.log(stack)
      }

      if (stack) {
        if (hmap[sarray[k]] && hmap[sarray[k]] === stack[stack.length - 1]) {
          stack.pop()
          console.log(stack)
        } else if (
          hmap[sarray[k]] &&
          hmap[sarray[k]] !== stack[stack.length - 1]
        ) {
          return false
        }
      }
    }
    if (stack.length === 0) return true
    else return false
  }
}

console.log(isValid('([{}])'))
console.log('-----Example 2-----')
console.log(isValid('(([{}])'))
console.log('-----Example 3-----')
console.log(isValid('}(([{}])'))
