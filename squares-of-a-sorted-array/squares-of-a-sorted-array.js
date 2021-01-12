/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(x => x ** 2).sort(function(a, b) {
        return a - b;
    });
};
