/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const dfs = (nodeleft, noderight) => {
    if (!nodeleft && !noderight) return true;
    if (!nodeleft && noderight || nodeleft && !noderight || nodeleft.val !== noderight.val) return false
    return dfs(nodeleft.right, noderight.left) && dfs(nodeleft.left, noderight.right);
}

var isSymmetric = function(root) {
    if(!root) return false
    return dfs(root.left, root.right)
    
};