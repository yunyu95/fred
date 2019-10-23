function digitSum(number) {
    if (number < 0) {
        number = - number;
    }
    else {
        let sum = 0;
        while (number != 0) {
            sum += number % 10;
            number /= 10;
        }
        return sum;
    }
}

console.log(digitSum(111));
console.log(digitSum(7));
console.log(digitSum(-56));