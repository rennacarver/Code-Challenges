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
    let max = 0
    this.dfs(root, max)
  }

  dfs(root, max) {
    if (!root) return 0

    let l = this.diameterOfBinaryTree(root.left)
    let r = this.diameterOfBinaryTree(root.right)

    console.log(`diameter: ${l + r}`)

    if (r > l) return r + 1
    else return l + 1
  }
}
