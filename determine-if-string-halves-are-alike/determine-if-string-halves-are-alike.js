/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let half = s.length / 2
    let firstHalf = s.slice(0, half)
    let secondHalf = s.slice(half, s.length)
    let equal = 0
    for(let i = 0; i < firstHalf.length; i++){
        if(arr.includes(firstHalf[i]))
            equal++
    }
    for(let i = 0; i < secondHalf.length; i++){
        if(arr.includes(secondHalf[i]))
            equal--
    }
    return equal === 0
};