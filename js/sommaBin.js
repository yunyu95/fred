function binarySum(left, right) {
    let carry = 0;
    let result = [];
    let a = undefined;
    let b = undefined;
    
    for (let i = left.length - 1; i >= 0; i--) {
        a = Number(left[i]);
        b = Number(right[i]);
        if (a === 1 && b === 1) {
            result[i] = carry;
            carry = 1;
        }
        else {
            if (carry === 1 && a === 1 || b === 1) {
                result[i] = a + b + carry;
                if (result[i] === 2) {
                    result[i] = 0;
                    carry = 1;
                }
                else {
                    carry = 0;
                }
            }
            else {
                result[i] = a + b + carry;
                carry = 0;
            }
        }
    }
    let sResult = result.toString();
    if(carry===1){
        let overflow='1';
        sResult = overflow.concat(sResult);
    }
    for(let cont=0;cont< left.length-1;cont++){
        sResult=sResult.replace(',','');
    }
    return sResult;
}


console.log(binarySum('111', '010'));
console.log(binarySum('111', '110'));
console.log(binarySum('001', '010'));
console.log(binarySum('101', '000'));
console.log(binarySum('110', '111'));
console.log(binarySum('000', '100'));
console.log(binarySum('010', '011'));
console.log(binarySum('111', '111'));

