class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    if (
      s.toLowerCase().replace(/\W/g, '') ===
      s.replace(/\W/g, '').split('').reverse().join('').toLowerCase()
    )
      return true
    return false
  }
}
