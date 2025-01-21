function maxProfit(prices) {
  let max = 0
  let rptr = 1
  let lptr = 0

  while (rptr < prices.length) {
    /*
        console.log(
        `Left: Prices[${lptr}] ${prices[lptr]}, Right: Prices[${rptr}] ${prices[rptr]}, Max: ${max} `
        )
        */

    if (prices[rptr] - prices[lptr] > max) max = prices[rptr] - prices[lptr]

    if (prices[rptr] < prices[lptr]) {
      lptr = rptr
      rptr += 1
    } else {
      rptr += 1
    }
  }
  return max
}
