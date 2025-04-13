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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const arr = [root];
    const result = []
    
    while(arr.length > 0){
        
        const temp = [];
        const ql = arr.length;
        
        for(let i = 0; i < ql; i++) {
            const data = arr.shift();
            temp.push(data.val)
            if(data.left !== null) {
                arr.push(data.left);
            }

            if(data.right !== null) {
                arr.push(data.right);
            }    
        }
        result.push(temp);
    }
    
    console.log(result)
    return result
    
};