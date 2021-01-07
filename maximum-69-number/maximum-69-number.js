/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str = num.toString()
    for(let i = 0; i < str.toString().length; i++){
        let rep = str.replace("6", "9")
        return parseInt(rep)
    }
    return num
};
​
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
