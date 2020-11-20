function average(array, int){
    if(array.length === 0 || int === 0) return false
    let hash = {}
    for(let i = 0; i < array.length; i++){
        let otherPair = int * 2 - array[i]
        if(hash[otherPair]) return true
        hash[array[i]] = 'hi'
    }
    return false
}
    
    console.log(average([2, 3, 4, 6], 3))
