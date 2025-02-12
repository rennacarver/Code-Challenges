/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    if (!head) return null

    let curr = head
    let next = curr.next
    let prev = null

    while (curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    return prev
  }
}
