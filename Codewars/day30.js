function isIsogram(str){
    
  //empty strings are isograms
  if (str === ''){
    return true
  }
  
  //convert string to lowercase array
  strArr = Array.from(str.toLowerCase())
  
  //create object with new key for each new character encountered
  //if character already has occurance, then return false
  let obj = {}
  
  for (k in strArr){
      console.log(obj)
      if (obj[strArr[k]]) {return false}
      obj[strArr[k]] = 1
  }
  
  //if no multiple occurances, return true
  return true;
  
}

https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript