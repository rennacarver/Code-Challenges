function search(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)

    console.log(`nums[${l}] = ${nums[l]}, nums[${r}] = ${nums[r]}`)

    if (target < nums[m]) r = m - 1
    else if (target > nums[m]) l = m + 1
    else return m

    console.log(`nums[${l}] = ${nums[l]}, nums[${r}] = ${nums[r]}`)
  }
  return -1
}

console.log(search([-1, 0, 2, 4, 6, 8], 4))
console.log('===test 2===')
console.log(search([-1, 0, 2, 4, 6, 8], 9))
console.log('===test 3===')
console.log(search([-1, 0, 3, 5, 9, 12], 9))
