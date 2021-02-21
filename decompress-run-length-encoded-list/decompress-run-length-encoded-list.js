/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i+=2){
        let j = 0
        while(j < nums[i]){
            arr.push(nums[i+1])
            j++
        }
    }
    return arr
};