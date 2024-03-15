function makeChange(amount, coins){
  console.log(amount, coins)

  for (k in coins){
    if (coins[k] <= amount){
      makeChange(amount-coins[k], coins)
    }
      
  }
}

console.log(makeChange(4, [1,6,10]))