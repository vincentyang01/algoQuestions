/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let x = Math.max(...nums)
    let xIndex = nums.indexOf(x)
    nums.splice(xIndex, 1)
    let y = Math.max(...nums)
    return (x-1) * (y-1)
};
