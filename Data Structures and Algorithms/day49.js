function SeriesSum(n)
{
  let sum = 0;
  for (let i = 0; i<n; i++){
    sum += 1 /(3*i + 1)
  }
  return sum.toFixed(2)
}

//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript