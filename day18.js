function squareDigits(num){
  let x = String(num)
    .split('')
    .map ((x) => x*x )
    .join('');
  return Number(x);
}

https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript