/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
var removeElements = function(head, val) {
    if (!head) return head
    let newHead = new ListNode(0, head);
    let temp = newHead
    while(temp.next){
        if(temp.next.val === val) {
            temp.next = temp.next.next
            continue;
        }
        temp = temp.next
    }
    return newHead.next
    
};