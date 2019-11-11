function isPangram(value) {
    let alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0,
        t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
    }
    if (typeof (value) !== 'string') {
        return undefined;
    }
    let lettera;
    for (let i = 0; i < value.length; i++) {
        lettera = value[i].toLowerCase();
        if (lettera >= 'a' && lettera <= 'z') {
            alphabet[lettera]++;
        }
    }
    let check = Object.keys(alphabet);
    for (let i = 0; i < check.length; i++) {
        if (alphabet[check[i]] === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram() === undefined);
console.log(isPangram(55) === undefined);
console.log(isPangram('ciao') === false);
console.log(isPangram('Quel vituperabile xenofobo zelante assaggia il whisky') === false);
console.log(isPangram('Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluja!') === true);
console.log(isPangram('Fabrizio ha visto Max acquistandogli juta per New York 1234567890.') === true);

