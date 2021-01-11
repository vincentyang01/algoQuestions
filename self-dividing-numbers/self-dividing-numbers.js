/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = []
    while(left <= right){
        let digits = left.toString().split('');
        let j = 0
        for(let i = 0; i < digits.length; i++){
            left % parseInt(digits[i]) === 0 ? j++ : null
        }
        j === digits.length ? arr.push(left) : null    
        left++
​
    }
    return arr
};
