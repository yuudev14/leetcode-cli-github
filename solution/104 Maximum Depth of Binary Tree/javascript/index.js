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
 * @return {number}
 */
var maxDepth = function(root) {
    
    let size = 0;
    
    const traverse = (node, num) => {
        if(node){
            if(num > size) {
                size = num
            }
            traverse(node.left, num+1);
            traverse(node.right, num+1)
            
        }
    }
    traverse(root, 1);
    return size;
    
};