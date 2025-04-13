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

function hasPathSum(root: TreeNode | null, targetSum: number, sum : number = 0, sums = []): boolean {
    if (root === null) return false
    sum += root.val
    if (root.left === null && root.right === null) {
        sums.push(sum)
    }
    
    hasPathSum(root.left, targetSum, sum, sums)
    hasPathSum(root.right, targetSum, sum, sums)

    return sums.includes(targetSum)
};