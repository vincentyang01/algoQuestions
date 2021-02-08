/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = new Map()
    for(let i = 0; i < paths.length; i++){
        map.set(paths[i][0], paths[i][1])
    }
    
    let arr = Array.from(new Set(paths.flat(1)))
    let starts = []
    for(let key of map){
        starts.push(key[0])
    }
    return arr.filter(x => !starts.includes(x))[0]

};