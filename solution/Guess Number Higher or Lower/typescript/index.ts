/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    // 2 pointer values
    let l = 0
    let r = n

    // loop until you have met the condition
    while (l <= r) {
        const pivot = Math.floor((l + r) / 2)
        const result = guess(pivot)
        if (result === -1) {
            r = pivot - 1
        } else if (result === 1) {
            l = pivot + 1
        } else {
            return pivot
        }
    }
};