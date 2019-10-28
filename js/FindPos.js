/*function FindPosition(data, value) {
    if (isNaN(value)) {
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) {
                return i;
            }
        }
    }
    else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === value) {
                return i;
            }
        }
        return -1;
    }

}*/

function FindPosition(data, value) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value || isNaN(data[i]) && isNaN(value)) {
            return i;
        }
    }
    return -1;
}


console.log(FindPosition([3, NaN, 1], 1)===2);
console.log(FindPosition([1, 2, 3], NaN)===-1);
console.log(FindPosition([1, 1, 1], 1)===0);
console.log(FindPosition(['1'], 1)===-1);
console.log(FindPosition([], 57)===-1);
console.log(FindPosition([NaN], NaN)===0);
console.log(FindPosition([1, 2, NaN], NaN)===2);


