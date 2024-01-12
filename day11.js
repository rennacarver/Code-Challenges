function descendingOrder(n){
  let arr = Array.from(n.toString())
  arr.sort((a,b) => b-a)
  return Number(arr.join(""))
}

https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript