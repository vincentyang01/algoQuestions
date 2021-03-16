/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = []
    let odd = []
    let result = []
    for(let num of nums){
        if(num % 2 === 0){
            even.push(num)
        } else {
            odd.push(num)
        }
    }
    console.log(even)
    for(let i = 0; i < even.length; i++){
        result.push(even[i])
        result.push(odd[i])
    }
    return result
};