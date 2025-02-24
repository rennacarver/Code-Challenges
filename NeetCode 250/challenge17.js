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
  diameterOfBinaryTree(root) {
    if (!root) return 0

    let l = diameterOfBinaryTree(root.left)
    let r = diameterOfBinaryTree(root.right)

    if (l + r > max) max = l + r

    if (r > l) return r + 1
    else return l + 1
  }

  dfs(root, max) {}
}
