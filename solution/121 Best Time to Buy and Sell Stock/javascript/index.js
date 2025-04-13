/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    
    for (let num of prices) {
        if(num < min) min = num;
        if(num - min > max) max = num - min
    }
    return max;
    
};