/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            if(A[i][j] === 0){
                A[i][j] = 1
            } else {
                A[i][j] = 0
            }
        }
        A[i].reverse()
    }
    return A
};