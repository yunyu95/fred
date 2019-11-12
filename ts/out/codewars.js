function partsSums(ls) {
    /*let sum: number[] = [];
    let len = ls.length
    for (let i = 0; i <= len; i++) {
        let somma: number = 0;
        let j = i;
        for (j; j < ls.length; j++) {
            somma += ls[j];
        }
        sum.push(somma);
       
    }
    return sum;
    let sum = Array(ls.length).fill(ls[ls.length - 1]);
    for (let i = ls.length - 2; i >= 0; i--) {
        sum.fill(ls[i] + sum[ls.length - 1], ls.length - i - 1);
    }
    sum.reverse();
    sum.push(0);
    return sum;
    if(ls.length===0){
        return Array(1).fill(0);
    }
    let sum= Array(ls.length).fill(0);
    for (let i = 0; i < ls.length; i++) {
        let j = i;
        for (j; j < ls.length; j++) {
            sum[i] += ls[j];
        }

    }
    sum.push(0);
    return sum;
                        //2200ms*/
    if (ls.length === 0 || ls[0] == undefined) {
        return Array(1).fill(0);
    }
    let sum = [0];
    let len = ls.length - 1;
    while (len >= 0) {
        sum.unshift(sum[0] + ls[len]);
        len--;
    }
    return sum;
}
console.log(partsSums([]));
console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
//# sourceMappingURL=codewars.js.map