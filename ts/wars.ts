function sortArray(array) {
    // Return a sorted array. sort the odd
    if (array.length === 0) {
        return array;
    }
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            odd.push(array[i]);
        }
    }
    odd.sort((left, right) => left == right ? 0 : left < right ? -1 : 1);
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            array[i] = odd[cont];
            cont++;
        }
    }
    return array;
}


//console.log(digPow(89, 1))
console.log(balance('1000.00 125 Market 125.45 126 Hardware 34.95'))


"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"