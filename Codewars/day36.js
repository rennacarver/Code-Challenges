function solution(str, ending){
  let end = new RegExp(`${ending}$`);
  return end.test(str)
}

https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions

/*additional solution
function solution(str, ending){
  return str.endsWith(ending);
}
*/