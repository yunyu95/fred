function checkSign(value){
    if(typeof(value)==='number'){
        if(value>0){
            return 'positive';
        }
        else if(value<0){
            return 'negative';
        }
        else{
            return 'zero';
        }
    }
    else{
        return undefined;
    }
}

function isOdd(value){
    if(typeof(value)==='number'){
        if(value-Math.ceil(value)!=0){
            return 'decimale';
        }
        else if(value%2===0){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return undefined;
    }
}



console.log(checkSign(10)==='positive');
console.log(checkSign(-23)==='negative');
console.log(checkSign(0)==='zero');
console.log(checkSign('ciao')===undefined);

console.log(isOdd(10)===false);
console.log(isOdd(-23)===true);
console.log(isOdd(0)===false);
console.log(isOdd('ciao')===undefined);
console.log(isOdd(-2.3)==='decimale');