/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr = []
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        } else if(obj[nums[i]]){
            arr.push(nums[i])
        }
    }
    return arr
};