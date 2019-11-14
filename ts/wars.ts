function digPow(n: number, p: number) {
    // your code
    let init:number = n;
    let array = [];
    while (n !== 0) {
        array.push(n % 10);
        n = Math.floor(n / 10);
    }
    array.reverse();
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] ** (p + i);
    }
    let check: number = Math.floor(sum / init);
    if (check * init === sum) {
        return check;
    }
    return -1;
}




//console.log(digPow(89, 1))
console.log(digPow(114, 3))