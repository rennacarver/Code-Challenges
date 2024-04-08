function countPositivesSumNegatives(input) {
  
  //if array is null
  if (input === null) return []
  
  //if empty array, return empty array
  if (input.length === 0) return []
  
  //create array to return
  let posNeg = [0,0]
  
  for (k in input){
    if (input[k] > 0) posNeg[0]++
    if (input[k] < 0) posNeg[1] += input[k]
  }
 
  return posNeg
}

//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript