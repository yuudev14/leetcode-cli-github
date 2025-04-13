/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head, p) {
    const seenNode = []
    let currentHead = head
    while(currentHead !== null){
        if(seenNode.includes(currentHead)){
            
            return currentHead
            
        }
        seenNode.push(currentHead)
        
        currentHead = currentHead.next;
        
    }
    return null
    
};