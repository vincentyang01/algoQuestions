/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        let str = ""
        for(let j = arr[i].length - 1; j >= 0; j--){
            str += arr[i][j]
        }
        arr[i] = str
    }
    return arr.join(' ')
};