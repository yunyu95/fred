function camelCase(str) {
    if (str.length === 0) {
        return str;
    }
    let array = [];
    let init = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            array.push(str.slice(init, i));
            init = i + 1;
        }
    }
    let camel = '';
    for (let i = 0; i < array.length; i++) {
        let temp = array[i][0];
        temp = String.fromCodePoint(temp.charCodeAt(0) - 32);
        camel += (temp + array[i].slice(1, array[i].length));
    }
    return camel;
}
console.log(camelCase(""));
console.log(camelCase("camel case method"));
console.log(camelCase("test case"));
//# sourceMappingURL=wars.js.map