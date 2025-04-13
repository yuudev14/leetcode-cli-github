/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result = new ListNode();
    let l1 = list1
    let l2 = list2
    let tail = result
    while(l1 && l2) {
        if (l1.val > l2.val) {
            tail.next = l2
            l2 = l2.next
        } else {
            tail.next = l1
            l1 = l1.next
        }
        tail = tail.next
    }
    
    tail.next = l1 || l2
    
    return result.next
    

};