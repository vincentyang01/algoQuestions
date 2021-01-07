/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
​
    words.forEach(word => {
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
​
            if (!allowed.includes(char)) break;
            else if (j === word.length - 1) count++;
        }
    });
​
    return count;
};
​
