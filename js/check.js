function check() {
    let name = document.getElementById('user').value.split(' ');
    if (name.length > 1 && name[0].length && name[1].length) {
        return true;

    }
    else {
        window.alert('!!!');
        return false;
    }
}