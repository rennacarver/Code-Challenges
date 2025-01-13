function solve(N, A) {
  let min = Infinity
  for (let k in A) {
    if (Math.abs(A[k]) < Math.abs(min)) min = A[k]
    if (Math.abs(A[k]) === Math.abs(min) && A[k] > 0) min = A[k]
    console.log(A[k])
    console.log(`min: ${min}`)
  }

  return min
}

console.log(solve(5, [-5, -4, -3, -2, -7, 2, 3, 4, 5]))
console.log(solve(5, [5, 4, 3, 2, 7, -2, 3, -4, -5]))
