/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const output = []
    for (let i = 1; i <= numRows; i++) {
        const arr = [];
        if(i === 1){
            output.push([1])
        } else if(i === 2){
            output.push([1, 1])
        } else{
            const curr = output[output.length - 1];
            for(let x = 1; x <= curr.length - 1; x++) {
                arr.push(curr[x] + curr[x - 1]);

            }
            output.push([1, ...arr, 1]);
        }
    }
    return output
};