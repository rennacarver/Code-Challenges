function openOrSenior(data){
  let array = []
  for (k in data){
      if (data[k][0] >= 55 && data[k][1] > 7)
           array[k] = 'Senior'
      else
           array[k] = 'Open'
  }
  return array
}

//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript