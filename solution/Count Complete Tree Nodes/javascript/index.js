
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {TreeNode} root
 * @return {number}
 */

var countNodes = function(root) {
    let length = 0;
    const traverse = (node) => {
        if(node !==null){
            traverse(node.left);
            length++
            traverse(node.right);
        }
        
    }
    traverse(root);
    return length;
    
};