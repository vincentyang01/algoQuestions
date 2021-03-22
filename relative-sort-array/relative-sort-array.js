/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let obj = {}
    for(let i = 0; i < arr1.length; i++){
        if(obj[arr1[i]]){
            obj[arr1[i]]++
        } else {
            obj[arr1[i]] = 1
        }
    }
    let arr = []
    for(let i = 0; i < arr2.length; i++){
        let num = arr2[i]
        for(let j = 0; j < obj[num]; j++){
            arr.push(num)
        }
        
    }
    let remainder = arr1.filter(n => !arr.includes(n))
    remainder.sort((a,b) => a - b)
    for(let num of remainder){
        arr.push(num)
    }
    return arr
};