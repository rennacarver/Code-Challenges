// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10,  25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

function makeChange(amount){
  let leastCoins = 0
  let current = amount
  let wallet = {
    quarters: 0,
    dimes: 0,
    nickels: 0
  }

  while(current >= 25){
    current -= 25
    leastCoins++
    wallet.quarters++
  }

  console.log(`Current value: ${current}`)

  while(current >=10){
    current -=10
    leastCoins++
    wallet.dimes++
  }

  console.log(`Current value: ${current}`)

  while(current >= 5){
    current -= 5
    leastCoins++
    wallet.nickels++
  }

  console.log(`Current value: ${current}`)
  console.log(`Wallet:`)
  console.log(wallet)
  
  return leastCoins
}

console.log(`Change for 40`)
console.log(makeChange(40))
console.log(`-----------`)
console.log(`Change for 35`)
console.log(makeChange(35))
console.log(`------------`)