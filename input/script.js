function fun1 () {
    var checkbox = document.getElementById('first');

    if (checkbox.checked) {
        alert('Checked!');
    }
    else {
        alert('Unchecked!');
    }
}

function fun2() {
    var radio = document.getElementsByName('r1');

    for(var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Выбран ' + (i+1) + ' элемент');
        }
    }
}

