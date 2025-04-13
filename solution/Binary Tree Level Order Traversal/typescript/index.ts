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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    const queue = [root]
    const result = []
 

    while(queue.length > 0) {
        
        const level = []

        for (let q of [...queue]) {
            const curr = queue.shift()
            level.push(q.val)
            if (q.left) {
                queue.push(curr.left)
            }
            
            if (q.right) {
                queue.push(curr.right)
            }
        }
        result.push(level)
   }

   return result
    
};