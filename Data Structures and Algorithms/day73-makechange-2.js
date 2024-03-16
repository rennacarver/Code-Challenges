function makeChange(amount, coins){
  if (amount ===0) return 
  
  console.log(amount, coins)

  for (k in coins){
    console.log(coins[k])
    if (coins[k] <= amount){
      makeChange(amount-coins[k], coins)
    }
      
  }
}

console.log(makeChange(12, [10,6,1]))