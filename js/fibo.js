/*function fibonacci(n){
    if(n==0||n==1){
        return 1;
    }
    else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}*/

let a =[1,1];

function fibonacci(n){

    if(n==0||n==1){
        return a[n];
    }
    else{
        if(a[n]===undefined){
            a[n] = fibonacci(n-1)+fibonacci(n-2);
            return a[n];
        }
        else{
            return a[n];
        }
    }
}



console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(12));
console.log(fibonacci(30));
console.log(fibonacci(50));
console.log(fibonacci(80));
console.log(fibonacci(90));
console.log(fibonacci(100));