function isEven(x) {
    if (x < 0) {
        return undefined;
    }
    else if (x === 0) {
        return true;
    }
    else if (x % 2 === 1) {
        return false;
    }
    else if (x % 2 === 0) {
        return true;
    }
    else {
        return undefined;
    }
}

function speed(distance, time) {
    if (typeof (distance) != 'string' && typeof (time) != 'string' && typeof (distance) != 'boolean' && typeof (time) != 'boolean') {
        if (distance < 0 || time < 0) {
            return undefined;
        }
        else {
            return distance / time;
        }
    }
    else {
        return undefined;
    }
}


console.log(isEven(10) === true);
console.log(isEven(9) === false);
console.log(isEven(0) === true);
console.log(isEven('r') === undefined);
console.log(isEven() === undefined);
console.log(isEven(3.4) === undefined);
console.log(isEven(-42) === undefined);


console.log(speed(-2, 10) === undefined);
console.log(speed(2, -10) === undefined);
console.log(speed(-2, -10) === undefined);
console.log(speed('ciao', -10) === undefined);
console.log(speed(-2, 'ciao') === undefined);
console.log(speed('fo', 'vi') === undefined);
console.log(speed('ciao', false) === undefined);
console.log(speed(10, false) === undefined);
console.log(speed(true, false) === undefined);
console.log(speed(10, 10) === 1);
console.log(speed(100, 10) === 10);
console.log(speed(10, 100) === 0.1);


