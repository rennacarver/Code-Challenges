// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like previous example.
let times10 = (n) => n * 10
let times5 = (n) => n * 5

const memoize = (cb) => {
    let cache = {}
    return (n) => {
      if (n in cache) {
        console.log('Fetching from cache:', n);
        return cache[n]
      } else {
        console.log('Calculating result');
        let result = cb(n)
        cache[n] = result
        return result
    }
  }

}

//returned function from memoizedAdd
const memoizedTimes10 = memoize(times10)
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~')
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9))	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9))	// cached
} catch (e) {
  console.error('Task 4:', e)
} 

const memoizedTimes5 = memoize(times5)
try {
  console.log('Task 4 calculated value:', memoizedTimes5(9))	// calculated
  console.log('Task 4 cached value:', memoizedTimes5(9))	// cached
} catch (e) {
  console.error('Task 4:', e)
} 