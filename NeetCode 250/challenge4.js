//brainstorming
//dictionary with value and its index
// {
//  3: 0
//  4: 1
//  5: 2
//  6: 3
//}

function twoSum(nums, target) {
  let hmap = {}
  for (k in nums) {
    console.log(nums[k])

    if (hmap[target - nums[k]]) return [hmap[target - nums[k]], k]
  }

  hmap[nums[k]] = k

  console.log(hmap)
  return [0, 0]
}

console.log(twoSum([3, 4, 5, 6], 7))
console.log(twoSum([4, 5, 6], 10))
