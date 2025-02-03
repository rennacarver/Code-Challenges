function search(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l < r - 1) {
    l = Math.floor((l + r) / 2)
    console.log(`nums[${l}] = ${nums[l]}`)
  }
  return 0
}

console.log(search([-1, 0, 2, 4, 6, 8], 4))
console.log('===test 2===')
console.log(search([-1, 0, 2, 4, 6, 8], 4))
