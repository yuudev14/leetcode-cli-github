/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    console.log(mat, r, c)
    const row = mat.length;
    const col = mat[0].length;
    //check if the matrix is valid to convert
    if((row * col) !== (r * c)) return mat;
    
    let row_count = 0;
    let col_count = 0;
    const arr = []
    
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            //check if undefined then set it to empty array
            if (arr[row_count] === undefined) {
                arr[row_count] = []
            }
            arr[row_count][col_count] = mat[i][j];
            
            col_count++
            // move the row
            if(col_count === c) {
                col_count = 0;
                row_count += 1;
            }
        }
    }
    return arr
    
};