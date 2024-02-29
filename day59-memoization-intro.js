// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => (n * 10)

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~')
console.log('times10 returns:', times10(9))

//Task 2: Use an object to cache the results of your times10 function.
//protip 1: create a function that checks if the value for n has been calculated before.
//protip 2: if the value for n has not been calculated, calculate and then save the result in the cache object

const cache = {}

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log('Fetching from cache:', n)
    return cache[n]
  } else {
    console.log('Calculating result')
    let result = times10(n)
    cache[n] = result
    return result
  }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~')
console.log('Task 2 calculated value:', memoTimes10(9))
console.log('Task 2 cached value:', memoTimes10(9))

//https://frontendmasters.com/courses/practical-algorithms/basic-memoization-solution/