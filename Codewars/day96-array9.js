function countBy(x, n) {
  let z = [];
  
  for (let i = x; i <= n*x; i+=x){
    z.push(i)
  }
  
  return z;
}

//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript