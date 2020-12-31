function reverseInteger(x) {
    let str = x.toString().split('')
    let rev = str.reverse()
    console.log(rev)
    return parseInt(rev);
};