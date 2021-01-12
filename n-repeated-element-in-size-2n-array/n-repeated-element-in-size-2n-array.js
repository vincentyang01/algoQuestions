/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(arr) {
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]])
            obj[arr[i]] = 1
        else{
            return arr[i]
        }
    }
    
};
