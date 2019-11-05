function romanNumerals(number) {
    let rif = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], ['M', 'MM', 'MMM']];
    let roman = '';
    let numLen = 0;
    let check = number;
    do {
        check = check / 10;
        numLen++;
    } while (check >= 1)
    for (let i = numLen - 1; i >= 0 && number !== 0; i--) {
        let div = Math.floor(number / 10 ** i);
        number = number % 10 ** i;
        if (div === 0) {
            continue;
        }
        roman += rif[i][div - 1];
    }
    return roman;
}

console.log(romanNumerals(6));
console.log(romanNumerals(10));
console.log(romanNumerals(76));
console.log(romanNumerals(602));
console.log(romanNumerals(3888));


