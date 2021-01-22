/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str = ""
    let arr = command.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "(" && arr[i + 1] === ")"){
            arr[i] = "o"
            arr.splice(i+1, 1)
            i-=2
        }
        if(arr[i] === "(" || arr[i] === ")"){
            arr.splice(i, 1)
            i-=1
        }
    }
    return arr.join('')
};
