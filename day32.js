function removeSmallest(numbers) {
  if (numbers.length === 0){return []}
  let min = Math.min(...numbers)
  let minIsRemoved = false;
  let arr = numbers.filter(x => {
      if(!minIsRemoved && x===min){
          minIsRemoved = true;
          return false
      } else {
          return true;
      }
  })
  return arr
}

https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript