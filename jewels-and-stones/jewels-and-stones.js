/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
        return [...stones].reduce((a,e)=>a+jewels.includes(e),0)
​
};
