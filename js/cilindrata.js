function Cilindrata(alesaggio, corsa, nCil){
    return Math.ceil(nCil*(corsa/10)*(alesaggio/20)*(alesaggio/20)*Math.PI);
}


function Distanza(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}

function Punti(x, y){
    let pos = Distanza(0 ,0 , x, y);
    if(pos===0){
        return 10;
    }
    else if(pos<=5){
        return 5;
    }
    else if(pos<=10){
        return 1;
    }
    else{
        return 0;
    }
}



console.log(Cilindrata(89, 88.3, 8)===4395);

console.log(Distanza(1, -2, 2, 2)===Math.sqrt(17));

console.log(Punti(0, 0)===10);
console.log(Punti(5, 0)===5);
console.log(Punti(3, 6)===1);
console.log(Punti(10, 0)===1);
console.log(Punti(10, 10)===0);