function asWord(value) {
    if (typeof (value) === 'number' && value >= 0 && value <= 9) {
        switch (value) {
            case 0: return 'zero';
                break;
            case 1: return 'one';
                break;
            case 2: return 'two';
                break;
            case 3: return 'three';
                break;
            case 4: return 'four';
                break;
            case 5: return 'five';
                break;
            case 6: return 'six';
                break;
            case 7: return 'seven';
                break;
            case 8: return 'eight';
                break;
            case 9: return 'nine';
                break;
        }
    }
    else {
        return undefined;
    }
}


console.log(asWord(0)==='zero');
console.log(asWord(3)==='three');
console.log(asWord(6)==='six');
console.log(asWord(8)==='eight');
console.log(asWord(-23)===undefined);
console.log(asWord(45)===undefined);
console.log(asWord('ciao')===undefined);