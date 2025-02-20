/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    if (!root) return 1

    console.log(root.val)
    let r = this.maxDepth(root.right)
    let l = this.maxDepth(root.left)

    if (r > l) return r + 1
    else return l + 1
  }
}
