function gimmeTheLetters(sp) {
  let start = sp.charAt(0)
  let end = sp.charAt(2)
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  let lowerResult = lower.toSpliced(lower.indexOf(start), lower.indexOf(end))
  let upperResult = upper.toSpliced(upper.indexOf(start), upper.indexOf(end))
  return null
}