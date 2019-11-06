function romana() {
    let decimale = document.getElementById('decimale').value;
    if (!(decimale > 0 && decimale < 4000)) {
        alert('Il numero deve essere compreso tra 1 e 3999(inclusi)');
    }
    else {
        document.getElementById('romano').value = romanNumerals(decimale);
    }
}

function isNum(event) {   //onpresskey: se ritorna vero, ritorna alla situazione prima del keypress
    var charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function cancella(){
    document.getElementById('romano').value = '';
}