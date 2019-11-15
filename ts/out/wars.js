function score(dice) {
    dice.sort((left, right) => left == right ? 0 :
        left < right ? -1 : 1);
    let check = 1;
    let index = 0;
    let cont = 0;
    let point = 0;
    for (let i = 0; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 1000;
            cont -= 3;
        }
        else {
            point = cont * 100;
        }
    }
    cont = 0;
    for (let i = index; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 200;
            cont -= 3;
        }
    }
    cont = 0;
    for (let i = index; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 300;
            cont -= 3;
        }
    }
    cont = 0;
    for (let i = index; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 400;
            cont -= 3;
        }
    }
    cont = 0;
    for (let i = index; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 500;
            cont -= 3;
        }
        else {
            point = cont * 100;
        }
    }
    cont = 0;
    for (let i = index; i < dice.length; i++) {
        if (dice[i] === check) {
            cont++;
        }
        else {
            check++;
            index = i - 1;
            break;
        }
    }
    while (cont > 0) {
        if (cont >= 3) {
            point += 600;
            cont -= 3;
        }
    }
    return point;
}
console.log(score([4, 4, 4, 3, 3]));
//# sourceMappingURL=wars.js.map