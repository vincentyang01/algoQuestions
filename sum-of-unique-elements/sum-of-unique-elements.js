/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
    }
    let total = 0
    console.log(obj)
    for(let num in obj){
        if(obj[num] === 1)
            total += parseInt(num)
    }
    return total
};