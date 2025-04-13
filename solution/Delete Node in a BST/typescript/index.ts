/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minValue(root: TreeNode | null): TreeNode {
    if (root.left === null) return root
    return minValue(root.left)
}

function deleteNode(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return null
    if (val < root.val) {
        root.left = deleteNode(root.left, val)
    } else if (val > root.val) {
        root.right = deleteNode(root.right, val)
    } else { // if node is equal
        //check if child nodes are null for left and right node
        if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            // find the minimum number on the right side
            const minRoot = minValue(root.right)
            // asign the value to the current rooot
            root.val = minRoot.val
            // addign a new subtree in the right
            root.right = deleteNode(root.right, minRoot.val)
        }
    }
    
    return root
    
};