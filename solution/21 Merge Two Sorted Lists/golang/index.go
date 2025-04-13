/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	node := &ListNode{Val: 0}
	curr := node

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			curr.Next = list1
			curr = curr.Next
			list1 = list1.Next
		} else {
			curr.Next = list2
			curr = curr.Next
			list2 = list2.Next
		}
	}

	for list1 != nil {
		curr.Next = list1
		curr = curr.Next
		list1 = list1.Next
	}

	for list2 != nil {
		curr.Next = list2
		curr = curr.Next
		list2 = list2.Next
	}

	return node.Next

}