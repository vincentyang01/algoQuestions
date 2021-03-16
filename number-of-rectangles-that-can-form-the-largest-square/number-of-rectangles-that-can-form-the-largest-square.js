/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let arr = []
    for(let rectangle of rectangles){
        arr.push(Math.min(...rectangle))
    }
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    let max = Math.max(...arr)
    return obj[max]
};