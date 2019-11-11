function array() {
    let ones = Array(5).fill(1);
    console.log(ones);
    let unordered = [4, 3, 5, 1, 7, 12];
    let ordered = unordered.sort((left, right) => left == right ? 0 : left < right ? -1 : 1)
    console.log(ordered);
    let interval = ordered.slice(2,3);
    console.log(interval);
    let filtro = ordered.filter(value => value % 2);
    console.log(filtro);
    let copia = Array.from('ciao');
    console.log(copia);
}


