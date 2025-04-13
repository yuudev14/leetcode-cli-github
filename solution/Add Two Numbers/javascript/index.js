/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var traverse = (node) => {
    let num = '';
    let temp_node = node
    while(temp_node) {
        num += temp_node.val
        temp_node = temp_node.next
    }
    return Number(num);
}

const reverseResult = (sum) => {
    let result;
    for(let i of sum) {
        const newNode = new ListNode(i);
        newNode.next = result === undefined ? null : result;
        result = newNode
    }
    return result;
    
}
var addTwoNumbers = function(l1, l2) {
    //combine the numbers in the array and convert it to number
    const a = traverse(l1);
    const b = traverse(l2);
    //sum it and convert it to string
    const sum = (a + b).toString();
    //create a linked list
    return reverseResult(sum)
    
    
};