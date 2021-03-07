/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const len = S.length;
  const res = [];

  for (let i = 0, start = 0, end = len; i <= len; i++) {
    S[i] == "I" ? res.push(start++) : res.push(end--);
  }
  return res;

};