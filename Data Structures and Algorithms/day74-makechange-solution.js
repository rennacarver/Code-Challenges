// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount, n.
let recursionCounter = 0
const coins = [10, 6, 1]

const makeChange = (value, i) => {
  recursionCounter++
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0
  let minCoins = 1
  coins.forEach((coins, i) => {
    if (value - coins >= 0) {
      let currMinCoins = makeChange(value - coins, i)
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins
      }
    }
  })
  return minCoins + 1
}

console.log(`Minimum coins for 12 is: ${makeChange(12)}`)