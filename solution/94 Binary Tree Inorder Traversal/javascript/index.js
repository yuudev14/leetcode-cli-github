
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    const number = []
    const traverse = (node) => {
        if (node === null) return
        traverse(node.left)
        number.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return number
};