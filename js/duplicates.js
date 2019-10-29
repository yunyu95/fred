function duplicates(array) {
    let ord = array.sort();
    let dupl = [];
    let cont = 0;
    

    for (let i = 0; i < (array.length - 1); i++) {
        if (ord[i] === ord[i + 1]) {
            dupl[cont] = ord[i];
            dupl[cont+1] = ord[i+1];
            cont+=2;
        }
    }
    return dupl;
}





console.log(duplicates([1, 3, 2, 5, 5, 4, 2, 1, 3]));
console.log(duplicates([1, 3, 5, 5, 5, 4, 1, 3]));
console.log(duplicates([51, 50, 55, 54, 50, 51, 55]));
console.log(duplicates([1, 3, 2, 5, 5, 4, 2, 4, 3]));
console.log(duplicates([11, 49, 82, 31, 31, 11, 49, 76, 76]));
console.log(duplicates([1, 3, 202, 54, 54, 4, 202, 1, 3]));