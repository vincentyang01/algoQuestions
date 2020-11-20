function palindrome(str){
    let hash = {}
    for(let i = 0; i < str.length; i++){
        if(!hash[str[i]]){
            hash[str[i]] = 1;
        } else {
            hash[str[i]]++
        } //{a => 2, b => 2, c => 3, d => 3}
    }
    let arr = Object.values(hash)
    let oddCount = 0
    for(let j = 0; j < arr.length; j++){
        if(arr[j] % 2 === 1) oddCount++
    }
    return oddCount < 1
}
