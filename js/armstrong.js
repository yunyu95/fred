function armstrong(data) {
    let check = data;
    if (typeof (data) === 'string') {
        return undefined;
    }
    if(data <= 0){
        return undefined;
    }
    if ((data - Math.floor(data)) !== 0) {
        return undefined;
    }
    let cifre = [];
    let cont = 0;
    let somma = 0;
    while (data >= 1) {
        cifre[cont] = data % 10;
        data = Math.floor(data / 10);
        cont++;
    }
    for (let i = 0; i < cifre.length; i++) {
        somma += cifre[i]**cifre.length;
    }
    if(somma === check){
        return true;
    }
    return false;
}



console.log(armstrong('ciao'));
console.log(armstrong(-10));
console.log(armstrong(0));
console.log(armstrong(153));
console.log(armstrong(154));
console.log(armstrong(1.53));
console.log(armstrong(1634));
console.log(armstrong(undefined));
console.log(armstrong());