//Failed experiment

// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

// Task 3: Use the memoized factorial method from the previous exercise to find the value of 10!

function factorial(n) {
  console.log(`n is ${n}`)
  if (n === 1) return n
  else return n * factorial(n - 1)
}

function memoizeFactorial() {
  const cache = {}
  //cache in closure
  return (n) => {

      if (n === 1) return n
  
      if (cache[n]) {
        console.log(`cache hit for ${n}`)
        return cache[n]
      } else {
        console.log(`cache miss for ${n}`)
        cache[n] = n * memoizeFactorial(n - 1)
        console.log(cache)
        return cache[n]
      }
  }
  
}

const closedMemoFactorial = memoizeFactorial()

//First call to do factorial of 10
console.log(closedMemoFactorial(10))
//Second call to do factorial of 10 should pull from cache
//console.log(closedMemoFactorial(10))

//let closureMemoFact5 = memoizeFactorial(5)