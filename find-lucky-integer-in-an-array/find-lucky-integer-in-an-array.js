/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    let lucky = []
    for(let num in obj){
 
        if(num == obj[num])
            lucky.push(num)
    }
    lucky.push(-1)
    console.log(lucky)
    return Math.max(...lucky)
};