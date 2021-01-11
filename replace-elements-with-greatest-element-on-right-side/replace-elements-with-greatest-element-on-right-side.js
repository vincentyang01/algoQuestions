/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length === 1) return [-1]
    for(let i = 0; i < arr.length; i++){
        if(!arr[i + 1]){
            arr[i] = -1
            return arr
        }
        arr[i] = Math.max(...arr.slice(i+1, arr.length))
        //nsole.log(arr)
    }
    return arr
};
