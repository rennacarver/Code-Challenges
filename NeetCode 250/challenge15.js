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
   * @return {TreeNode}
   */
  invertTree(root) {
    //base case
    if (!root) return null
    //console.log(root.val)

    //create new tree from right and left branches
    let node = new TreeNode(root.val)

    //recursively call invertTree on both branches
    this.invertTree(root.right)
    this.invertTree(root.left)
  }
}
