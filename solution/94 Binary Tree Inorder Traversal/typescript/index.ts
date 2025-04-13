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

// function inorderTraversal(root: TreeNode | null, arr = []): number[] {
//     if (root === null) return []
//     inorderTraversal(root.left, arr)
//     arr.push(root.val)
//     inorderTraversal(root.right, arr)
//     return arr
    
    
// };


function inorderTraversal(root: TreeNode | null): number[] {
    const stack = []
    const result = []
    
    let curr = root
    
    while(curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        
        curr = stack.pop()
        result.push(curr.val)
        curr = curr.right
    }
    
    return result
};