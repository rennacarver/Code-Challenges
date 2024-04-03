function sumTwoSmallestNumbers(numbers) { 
  //create copy of array
  let array = numbers
  
  //find minimum value
  let min = Math.min(...array)
  
  //find index of minimum value
  let index = array.indexOf(min)
  
  //remove first minimum
  array.splice(index, 1)
  
  //find minimum of new array without first minimum
  let minTwo = Math.min(...array)
  
  return min + minTwo
}

//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript