function getSingle(array){
    let ord=array.sort();
    for(let i=0;i<(array.length-1);i++){
        if(ord[i]!==ord[i+1]){
            return ord[i];
        }
        else{
            i++;
        }
    }
}

/*


console.log(getSingle([1,3,2,5,5,4,2,1,3])===4);
console.log(getSingle([1,3,2,5,5,,11,2,9,1,3,7,7,9])===11);
console.log(getSingle([51,50,55,54,50,51,55])===54);
console.log(getSingle([1,3,2,5,5,4,2,4,3])===1);
console.log(getSingle([11,49,99,82,31,31,11,49,76,99,76])===82);*/
console.log(getSingle([1,3,202,54,54,4,202,1,3])===4);