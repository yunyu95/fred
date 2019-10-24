function digitSum(number) {
    number = Math.abs(number);
    let sum = 0;
    while (number != 0) {
        number = Math.floor(number);
        sum += number % 10;
        number /= 10;
    }
    return sum;
}

/*function digitSum(number) {
    number = Math.abs(number);
    let numString = String(number);
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        num = Number(numString[i]);
        sum += Number(numString[i]);
    }
    return sum;
}*/

function Singolo (num) {
    let result = 0;
    do {
        result = digitSum(num);
        num = result;
    } while (result > 9);
    return result;
}

/*console.log(digitSum(111));
console.log(digitSum(7));
console.log(digitSum(-56));
console.log(digitSum(-99));
console.log(digitSum(0));
console.log(digitSum(324824));*/

console.log(Singolo(111));
console.log(Singolo(7));
console.log(Singolo(-56));
console.log(Singolo(-99));
console.log(Singolo(0));
console.log(Singolo(324824));





