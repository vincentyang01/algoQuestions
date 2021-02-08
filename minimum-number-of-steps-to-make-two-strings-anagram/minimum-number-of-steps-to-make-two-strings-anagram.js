/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let hashS = {}
    let replaceCount = 0
    for(let i in s) {
        hashS[s[i]] = hashS[s[i]] ?  hashS[s[i]] + 1 :  1
    }
    for(let j in t) {
        if (hashS[t[j]]) {
            hashS[t[j]] --
            continue
        }
        replaceCount++
    }
    return replaceCount
};