/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var reverseList = function(head) {
    // iterate through the head first
    // create a variable newNode
    
    // hav a curr that = temp
    // let temp to be tep.next
    // let curr.next = null
    // let cur.next = newNode.next
    // newNode.next = curr.next
    
    let newNode = new ListNode(-1);
    let temp = head;
    while(temp){
        const temp_curr = temp;
        temp = temp.next
        temp_curr.next = null;
        temp_curr.next = newNode.next;
        newNode.next = temp_curr;
    }
    return newNode.next
    
};