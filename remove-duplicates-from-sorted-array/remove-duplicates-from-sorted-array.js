/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = "hi"
        } else {
            nums.splice(i, 1)
            i-=1
        }
    }
};
