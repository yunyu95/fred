/*function duplicates(array) {    //soluzione semplice
    let ord = array.sort();
    for (let i = 0; i < (array.length); i++) {
        if (ord[i] !== ord[i + 1]) {
            return ord[i];
        }
        else if (isNaN(ord[i + 1])) {
            return ord[i];
        }
        else {
            i++;
        }
    }
}*/


/*function duplicates(value) {  //soluzione con sorting
    let unique = true;
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (i === j) {
                continue;
            }
            if (value[i] === value[j]) {
                unique = false;
            }
            else {
                unique = true;
            }
        }
        if (unique) {
            return value[i];
        }
    }
}*/

function duplicates(value) {
    let ht={};     //inizializzato un oggetto con tutti elementi undefined
    for(let i=0;i<value.length;i++){
        ht[value[i]]=!ht[value[i]];
    }
    for(let i=0;i<value.length;i++){
        if(ht[value[i]]){
            return value[i];
        }
    }
}


console.log(duplicates([1, 2, 3, 2, 1]) === 3);
console.log(duplicates([1, 3, 2, 5, 5, 11, 2, 9, 1, 3, 7, 7, 9]) === 11);
console.log(duplicates([51, 50, 55, 54, 50, 51, 55]) === 54);
console.log(duplicates([1, 3, 2, 5, 5, 4, 2, 4, 3]) === 1);
console.log(duplicates([11, 49, 99, 82, 31, 31, 11, 49, 76, 99, 76]) === 82);
console.log(duplicates([1, 3, 202, 54, 54, 4, 202, 1, 3]) === 4);