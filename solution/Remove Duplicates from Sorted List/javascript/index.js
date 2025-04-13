/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // make a set
    // add var temp
    // iterate through the head
    // check if temp.val is in set
    // if not continue iterating through the head
    // else set prev.next = prev.next.next
    
    const set = new Set();
    
    let temp = head;
    let prev = head;
    
    while (temp) {
        if (set.has(temp.val)) {
            prev.next = temp.next;
        }else{
            set.add(temp.val);
            prev = temp;
        }
        temp = temp.next;
        
    }
    
    return head;
    
};