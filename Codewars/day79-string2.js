function gimmeTheLetters(sp) {
  let start = sp.charAt(0)
  let end = sp.charAt(2)
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  //if lowercase
  if (sp.charAt(0) === sp.charAt(0).toLowerCase()){
    let begin = lower.indexOf(start)
    let final = lower.indexOf(end)
    return lower.slice(begin, final+1)
  }
  //if uppercase
  if (sp.charAt(0) === sp.charAt(0).toUpperCase()){
    let begin = upper.indexOf(start)
    let final = upper.indexOf(end)
    return upper.slice(begin, final+1)
  }
}

console.log(gimmeTheLetters('f-z'))
console.log(gimmeTheLetters('H-W'))

//https://www.codewars.com/kata/6512b3775bf8500baea77663/solutions/javascript