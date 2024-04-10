function getAverage(marks){
  return Math.floor(marks.reduce((acc, curr) => acc+=curr)/marks.length)
}

//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript