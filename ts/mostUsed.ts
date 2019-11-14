
// trasformazione da stringa a array (parole)
for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || i === s.length) {
        array.push(s.slice(init, i));
        init = i + 1;
    }
}
// trasformazione da numero a array 
let array = [];
while (n !== 0) {
    array.push(n % 10);
    n = Math.floor(n / 10);
}