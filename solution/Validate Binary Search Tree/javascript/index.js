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
var isValidBST = function(root) {
    const traverse = node => {
        if(node !== null){
            
            if(node.left && node.left.val > node.val) return false
            if (node.right && node.right.val < node.val) return false
            if(node.left && node.left.val === node.val) return false
            if (node.right && node.right.val === node.val) return false
            traverse(node.left)
            traverse(node.right)
        }
    }
    return traverse(root) === false ? false : true
    
};