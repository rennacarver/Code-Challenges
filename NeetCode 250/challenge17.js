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
    //arrays are passed by reference creating a global variable
    let max = [0]
    this.dfs(root, max)
    return max[0]
  }

  dfs(root, max) {
    if (!root) return 0

    let l = this.dfs(root.left, max)
    let r = this.dfs(root.right, max)

    console.log(`diameter: ${l + r}`)

    if (l + r > max[0]) max[0] = l + r

    if (r > l) return r + 1
    else return l + 1
  }
}
