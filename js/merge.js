function merge(left, right) {      // left e right sono due array ordinati
    let merged = [];
    let cont = 0;
    for (let i = 0, j = 0; i < left.length || j < right.length;) {
        if (right[j] > left[i]) {
            merged[cont] = left[i];
            cont++;
            if (i < left.length) {
                i++;
            }
        }
        else {
            merged[cont] = right[j];
            cont++;
            if (j < right.length) {
                j++;
            }
        }
    }
    return merged;
}



console.log(merge([1, 2, 3, 4], [3, 4, 5, 6]));
