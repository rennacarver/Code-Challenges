var number=function(array){
  if (array.length === 0) return []
  for (k in array) {
    array[k] = `${Number(k)+1}: ${array[k]}`
  }
  return array
}

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript