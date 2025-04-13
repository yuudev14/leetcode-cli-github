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
const merge = (list1: ListNode, list2: ListNode) => {
    let head = new ListNode(0)
    let tail = head
    while(list1 && list2){
        if (list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    tail.next = list1 || list2
    return head.next
    
}
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let prev = null;
    for (let arr of lists){
        prev = merge(prev, arr)
    }
    return prev;

};