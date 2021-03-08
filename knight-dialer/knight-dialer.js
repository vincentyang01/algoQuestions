/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
    let dp = new Array(10).fill(1) //[1,1,1,1,1,1,1,1,1,1]
    while(n > 1){
        let next = new Array(10).fill(0) //[0,0,0,0,0,0,0,0,0,0]
        for(let i = 0; i < dp.length; i++){ //0 to 9
            for(let moveOption of moves[i]){
                //console.log("What is happening? ",next[i], moveOption)
                //console.log(next)
                next[i] += dp[moveOption]
                next[i] %= (10 ** 9 + 7)
            }
        }
        n--
        dp = next
    }
    return dp.reduce((acc, val) => acc + val, 0) % (Math.pow(10, 9) + 7);
    
};