function camelCase(str: string): string {
    if (str.length === 0) {
        return str;
    }
    let change: string[] = str.split('');
    for (let i = 0; i < change.length; i++) {
        if (change[i].codePointAt(0) < 65 && change[i].codePointAt(0) > 0) {
            change[i] = String.fromCodePoint(change[i].charCodeAt(0) + 32);
        }
        else {
            change[i] = change[i];
        }
    }
    str = change.join('');
    let array: string[] = [];
    let init: number = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' ' || i === str.length) {
            array.push(str.slice(init, i));
            init = i + 1;
        }
    }
    if (array[0] === '') {
        array.shift();
    }
    if (array[array.length - 1] === '') {
        array.pop();
    }
    let camel: string = '';
    for (let i = 0; i < array.length; i++) {
        let temp: string = array[i][0];
        if (temp !== undefined && temp.charCodeAt(0) > 96 && temp.charCodeAt(0) < 127) {
            temp = String.fromCodePoint(temp.charCodeAt(0) - 32);
        }
        camel += (temp + array[i].slice(1, array[i].length));
    }
    return camel;
}

console.log(camelCase('QVrvMpKCAk:JQdYQ5tJdAULlW)EgVHqypXHnWjqIWMIXXNEhlDOYVOhhYsyEVwPk#UPtiABAxV7RfILZKcJAL')==='QVrvMpKCAkZJQdYQUtJdAULlWIEgVHqypXHnWjqIWMIXXNEhlDOYVOhhYsyEVwPkCUPtiABAxVWRfILZKcJAL');

console.log(camelCase("say hello "));
console.log(camelCase("camel case method"));
console.log(camelCase("test case"));
console.log(camelCase(' camel case word'));


