function maxProfit(prices) {
  let max = 0
  let rptr = 1
  let lptr = 0

  while (rptr < prices.length) {
    console.log(
      `Left: Prices[${lptr}]: ${prices[lptr]}, Right: Prices[${rptr}]: ${prices[rptr]}`
    )
    if (prices[rptr] - prices[lptr] < 0) {
      lptr = rptr
      rptr += 1
    }
  }
}

maxProfit([10, 1, 5, 6, 7, 1])
