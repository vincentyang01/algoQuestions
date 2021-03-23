/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let arr = []
    words.sort((a,b) => a.length - b.length)
    for(let word of words){
        for(let isSub of words){
            if(isSub.includes(word) && words.indexOf(word) !== words.indexOf(isSub) && !arr.includes(word))
                arr.push(word)
        }
    }
    return arr
};