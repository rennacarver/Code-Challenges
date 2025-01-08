//brainstorming
//dictionary with value and its index
// {
//  3: 0
//  4: 1
//  5: 2
//  6: 3
//}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let hmap = {}
    for (let k in nums) {
      console.log(nums[k])

      if (hmap[target - nums[k]])
        return [Number(hmap[target - nums[k]]), Number(k)]

      hmap[nums[k]] = k
    }

    console.log(hmap)
    return [0, 0]
  }
}
