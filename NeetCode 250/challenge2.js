class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let object = {}

    for (let k in nums) {
      if (object[nums[k]]) {
        return true
      } else object[nums[k]] = 1
    }
    console.log(object)
    return false
  }
}

// https://neetcode.io/problems/duplicate-integer
