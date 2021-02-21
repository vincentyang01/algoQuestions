/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let sorted = []
    
    if(stones.length === 2){
        if(stones[0] > stones[1]){
            return stones[0] - stones[1]
        } else if(stones[0] < stones[1]){
            return stones[1] - stones[0]
        } else if(stones[0] === stones[1]){
            return 0
        }
    }
    
    while(stones.length > 1){
        stones.sort((a, b) => a - b)

        let diff = stones[stones.length - 1] - stones[stones.length-2]
        console.log(stones[stones.length - 1]," - ",stones[stones.length-2]," = ",diff)
        if(diff){
            stones.pop()
            stones[stones.length - 1] = diff
        } else {
            stones.pop()
            stones.pop()
        }
    }
    if(stones.length){
        return stones[0]
    } return 0
};