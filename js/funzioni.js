function isEven(x) {
    if (x === 0) {
        return true;
    }
    else if (x % 2 === 1) {
        return false;
    }
    else if (x % 2 === 0) {
        return true;
    }
    else{
        return undefined;
    }
}



console.log(isEven(10) === true);
console.log(isEven(9) === false);
console.log(isEven(0) === true);
console.log(isEven('r') === undefined);
console.log(isEven() === undefined);
console.log(isEven(3.4) === undefined);




