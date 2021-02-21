/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = ""
    let i = 0
    for(i = 0; i < word1.length && i < word2.length; i++){
        str += word1[i]
        str += word2[i]
    }
    if(word1.length > word2.length){
        str += word1.substring(i, word1.length)
    } else if(word1.length < word2.length) {
        str += word2.substring(i, word2.length)
    }
    return str
};