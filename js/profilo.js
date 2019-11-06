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
    for (let i = 0; i < json.job.languages.length; i++) {
        switch (json.job.languages[i]) {
            case 'JS':
                document.getElementById('langJS').checked = true;
                break;
        }
    }
}