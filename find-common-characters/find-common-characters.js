/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    function split(s){
        const map={}
        for(let a of s) map[a] = (map[a] || 0) + 1
        return map
    }
    const map = split(A[0])
    for(let a of A){
        const tmp = split(a)
        for(let m in map){
            map[m] = Math.min(map[m], tmp[m] || 0)
        }
    }
    let list = []
    for(let m in map){
        for(let i=0; i<map[m]; i++) list.push(m)
    }
    return list

};