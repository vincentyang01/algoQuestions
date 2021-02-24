/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 0) return false
    if(n == 1 || n == 2) return true
    
    while(n > 2){
        n = n / 2
        
        if(n === 2) return true
    } return false
};