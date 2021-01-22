/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        let currNumCount = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j])
                currNumCount++
        }
        arr[i] = currNumCount
    }  
    return arr
};
