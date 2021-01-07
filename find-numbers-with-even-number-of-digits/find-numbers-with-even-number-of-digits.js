/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if((nums[i] > 9 && nums[i] <=99) || (nums[i] > 999 && nums[i] <= 9999) || (nums[i] > 99999 && nums[i] <= 999999))
            count++
    }
    return count
};
