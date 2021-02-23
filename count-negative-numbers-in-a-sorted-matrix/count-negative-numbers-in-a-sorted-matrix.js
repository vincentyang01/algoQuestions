/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const flattened = arr => [].concat(...arr);
    let array = flattened(grid)
    let neg = 0
    for(let num of array){
        //console.log(num)
        if(num < 0) neg++
    }
    return neg
};