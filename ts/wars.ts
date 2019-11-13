function camelCase(str: string): string {
    if(str.length===0){
        return str;
    }
    let array: string[] = [];
    let init: number = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ' '|| i === str.length) {
            array.push(str.slice(init, i));
            init = i + 1;
        }
    }
    let camel:string='';
    for(let i = 0;i<array.length;i++){
        let temp:string=array[i][0];
        temp = String.fromCodePoint(temp.charCodeAt(0)-32);
        camel+=(temp + array[i].slice(1, array[i].length));
    }
    return camel;
}



console.log(camelCase(""));
console.log(camelCase("camel case method"));
console.log(camelCase("test case"));

