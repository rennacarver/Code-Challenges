function makeChangeMemo() {
  let stack = []
  let minCoins = Infinity
  
  return function makeChange (amount, coins) {
    
    if (amount === 0) {
      //console.log(`Reached end of branch ${stack}`)
      if (minCoins > stack.length) {
        minCoins = stack.length
        //console.log(`Minimum coins is now ${minCoins}`)
      }
    }

    for (k in coins) {
      stack.push(coins[k])
      //console.log(`Attempting branch: ${stack}`)
      if (coins[k] <= amount) {
        //console.log(`Entering branch ${stack}`)
        makeChange(amount - coins[k], coins)
      }
      stack.pop()
    }
    return minCoins
  } // end of closure
  
} // end of function


const makeChangeClosed = makeChangeMemo()
console.log(`Minimum coins for 12¢ with 10¢, 6¢, and 1¢ is:`)
console.log(makeChangeClosed(12, [10, 6, 1]))