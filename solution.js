function solution(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "-"){
            if(!Number(arr[i-1]) && !Number(arr[i-2])){
                return -1
            }
            arr[i-2] = arr[i-1] - arr[i-2]
            arr.splice(i-1, 2)
            solution(arr)
        }
        if(arr[i] === "+"){
            if(!Number(arr[i-1]) && !Number(arr[i-2])){
                return -1
            }
            arr[i-2] = parseInt(arr[i-1]) + parseInt(arr[i-2])
            arr.splice(i-1, 2)
            solution(arr)
        }
        if(arr[i] === "DUP"){
            arr[i] = arr[i-1]
            solution(arr)
        }
        if(arr[i] === "POP"){
            arr.splice(i-1, 2)
            solution(arr)
        }
    }
    if(arr[arr.length - 1]) {
        console.log(arr[arr.length - 1])
        return arr[arr.length - 1]
    } else {
        console.log(-1)
        return -1
    }
}

function changeToArr(str){
    let arr = str.split(' ')
    solution(arr)
}

changeToArr('4 5 6 - 7 +')
console.log('-------------')
changeToArr('13 DUP 4 POP 5 DUP + DUP + -')
console.log('-------------')
changeToArr('5 6 + -')
console.log('-------------')
changeToArr('3 DUP 5 - -')
