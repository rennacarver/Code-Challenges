//build a binary tree from a given array

//Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }

  insert(val) {}

  delete(val) {}

  search(val) {}
}

function arrayToTree(array) {
  let m = Math.floor(array.length / 2)
  let node = new TreeNode(array[m])
  array.splice(m, 1)
  console.log(array)
  return node
}

console.log(arrayToTree([1, 2, 3, 4, 5]))

//https://www.youtube.com/watch?v=0K0uCMYq5ng
