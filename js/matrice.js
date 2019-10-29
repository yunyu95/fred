function matrixRowAdd(data) {
    let sum = [];
    for (let i = 0; i < data.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < data[i].length; j++) {
            sum[i] += data[i][j];
        }
    }
    return sum;
}

function matrixColAdd(data) {
    let sum = [];
    let maxCol = data[0].length;
    let maxRow = data.length;

    for (let j = 0; j < maxCol; j++) {
        sum[j] = 0;
        for (let i = 0; i < maxRow; i++) {
            sum[j] += data[i][j];
        }
    }
    return sum;
}




console.log(matrixRowAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4], [4, 6, 3, 7]]));
console.log(matrixRowAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4], [4, 6, 3, 7], [4, 4, 4, 4]]));
console.log(matrixRowAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4]]));

console.log(matrixColAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4], [4, 6, 3, 7]]));
console.log(matrixColAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4], [4, 6, 3, 7], [4, 4, 4, 4]]));
console.log(matrixColAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4]]));
console.log(matrixColAdd([[1, 2, 3], [4, 7, 3], [5, 2, 9], [4, 6, 3]]));
