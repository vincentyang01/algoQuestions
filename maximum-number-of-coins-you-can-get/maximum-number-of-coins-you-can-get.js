/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let sum = 0
    piles.sort((a, b) => b - a)
    let len = piles.length;
    
    for (let i = 1; i < len; i += 2) {
        sum += piles[i];
        len -= 1;
    };
    return sum
};