function findNeedle(haystack) {
  for (straw in haystack) {
    if (haystack[straw] === 'needle') 
      return `found the needle at position ${straw}`
  }
}

//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript