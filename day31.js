function minMax(arr){
  
  //set min and max to first element in array
  let max = arr[0]
  let min = arr[0]
  
  //reset min and max based on comparison to each element
  arr.forEach(x => {
    if(x>max){max = x}
    if(x<min){min = x}
  })
  
  return [min,max];
}

https://www.codewars.com/kata/559590633066759614000063/solutions/javascript