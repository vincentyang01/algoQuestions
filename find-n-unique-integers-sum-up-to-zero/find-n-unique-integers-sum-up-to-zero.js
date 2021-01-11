/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = []
    let i = 1
    if(n % 2 === 1){
        arr.push(0)
    }
        
    while(arr.length != n){
        arr.push(i)
        arr.push(i * -1)
        i++
    }
    
    return arr
};
