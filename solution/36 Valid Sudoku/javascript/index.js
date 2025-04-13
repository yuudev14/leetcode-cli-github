/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let x = 0; x < 9; x++) {
        const map = {};
        for(let y = 0; y < 9; y++){
            console.log(map)
            if (board[y][x] === ".") continue;
            if(board[y][x] in map) return false
            map[board[y][x]] = 1
        }
    }
    for(let x = 0; x < 9; x++) {
        const map = {};
        for(let y = 0; y < 9; y++){
            console.log(map)
            if (board[x][y] === ".") continue;
            if(board[x][y] in map) return false
            map[board[x][y]] = 1
        }
    }
    return true
    
};