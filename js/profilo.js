function riempi() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "../tom.json");  //specificare il percorso
    request.send();
}

function callback() {
    let nome = document.getElementById('name');
    let lavoro = document.getElementById('job');
    if (this.status != 200) {
        nome.value += "[" + this.status + "]\n";
        lavoro.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    nome = json.name;
    lavoro = json.job.title;
    document.getElementById('name').value = nome;
    document.getElementById('job').value = lavoro;
    let obj = {};
    for (let i = 0; i < json.job.languages.length; i++) {
        obj[json.job.languages[i]] = 1;
    }

    let linguaggi = Object.keys(obj);
    for (let i = 0; i<linguaggi.length;i++) {
        if (obj[linguaggi[i]] === 1) {
            document.getElementById(linguaggi[i]).checked = true;
        }
    }
}