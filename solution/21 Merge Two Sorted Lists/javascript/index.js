/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function Node(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
var mergeTwoLists = function(list1, list2) {
    // create a variable to store merge linked list
    // check the head. whoever is the lowest will be put in the merged
    // removed the head
    
    let head = new Node(null, null);
    let tail = head;
    
    
    let temp1 = list1;
    let temp2 = list2;
    
    while (temp2 && temp1) {
        if(temp1.val <= temp2.val){
            tail.next = temp1
            tail = tail.next
            temp1 = temp1.next
        }else {
            tail.next = temp2
            tail = tail.next
            temp2 = temp2.next
            
        }
    }
    
    if(temp1){
        tail.next = temp1
    }
    if(temp2){
        tail.next = temp2
    }
    head = head.next;
    return head
    
};