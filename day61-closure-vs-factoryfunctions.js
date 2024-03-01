// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

//Using closure to build multiple versions of a function
const memoizedClosureTimesM = (m) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache:', n);
      return cache[n];
    } else {
      console.log('Calculating result');
      let result = m * n;
      cache[n] = result;
      return result;
    }
  };
}

//Using a factory function to build multiple versions of a function

function createMemoizeTimesM(m) {
  return {
    timesM: m,
    cache: {},
    getMemoizeTimesM(num) {
      if (num in this.cache) {
        console.log('Fetching from cache:', num);
        return this.cache[num];
      } else {
        console.log('Calculating result');
        let result = this.timesM * num;
        this.cache[num] = result;
        return result;
      }
    }
  }
}

let memoObjTimes11 = createMemoizeTimesM(11)
console.log(memoObjTimes11)
console.log(memoObjTimes11.getMemoizeTimesM(5))
console.log(memoObjTimes11)
console.log(memoObjTimes11.getMemoizeTimesM(5))
console.log(memoObjTimes11)

const memoClosureTimes10 = memoizedClosureTimesM(10);
const memoClosureTimes5 = memoizedClosureTimesM(5)

console.log(memoClosureTimes10(9))
console.log(memoClosureTimes10(9))

console.log(memoClosureTimes5(9))
console.log(memoClosureTimes5(9))