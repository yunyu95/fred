function changeBgColor() {
    let color = document.getElementById('color').value;
    if (color === 'yellow') {
        document.bgColor = 'yellow';
    }
    if (color === 'blue') {
        document.bgColor = 'blue';
    }
    if (color === 'red') {
        document.bgColor = 'red';
    }
    if (color === 'green') {
        document.bgColor = 'green';
    }
    if (color === 'black') {
        document.bgColor = 'black';
    }
}

function changeOption() {
    let opt = document.getElementById('option').value;
    if (opt === 'yellow') {
        document.bgColor = 'yellow';
    }
    if (opt === 'blue') {
        document.bgColor = 'blue';
    }
    if (opt === 'red') {
        document.bgColor = 'red';
    }
    if (opt === 'green') {
        document.bgColor = 'green';
    }
    if (opt === 'black') {
        document.bgColor = 'black';
    }
    if (opt === 'pink') {
        document.bgColor = 'pink';
    }
    if (opt === 'orange') {
        document.bgColor = 'orange';
    }
    if (opt === 'grey') {
        document.bgColor = 'grey';
    }
    if (opt === 'white') {
        document.bgColor = 'white';
    }
}

function colorChange() {
    let text = document.getElementById('title').value;
    text.colorChange = 'red';
}

function rotation() {
    let myImage = document.getElementById("image");
    myImage.style.transform = "rotate(-7deg)";
}

function changePos() {
    let myImage = document.getElementById("image");
    //myImage.width = 1000;
    //myImage.heigth = 600;
    myImage.style.transform = "rotate(7deg)";
}

/*function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.json");
    request.send();
}

function callback() {
    let target = document.getElementById('info');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    target.value += json.name + '\n';
    target.value += json.job.title + '\n';
    target.value += json.job.languages + '\n';
}*/


function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.txt");
    request.send();
}

function callback() {
    let target = document.getElementById('info');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let obj = {};
    let splitList = this.responseText.split(',');    // il documento viene messo in this.responseText comee stringa
    for (let i = 0; i < splitList.length; i++) {
        splitList[i] = splitList[i].split('=');
    }
    for (let i = 0; i < splitList.length; i++) {
        obj[splitList[i][0]] = splitList[i][1];
    }
    //let json = JSON.parse(obj);
    target.value += obj.name + '\n';
    target.value += obj.job + '\n';
    target.value += obj.lang + '\n';
    target.value += obj.langSec + '\n';
}

function deleteAll() { 
    let area = document.getElementById("info");
    area.value = '';
}