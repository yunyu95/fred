function MatrixRowAdd(data) {
    let sum = [];
    for (let a = 0; a < data.length; a++) {
        sum[a] = 0;
    }

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            sum[i] += data[j];
        }
    }
    return sum;
}



console.log(MatrixRowAdd([[1, 2, 3, 4], [4, 7, 3, 8], [5, 2, 9, 4], [4, 6, 3, 7]]))