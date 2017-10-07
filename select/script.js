function selectFruit() {
    var sel = document.getElementById('fruits').selectedIndex;
    var options = document.getElementById('fruits').options;
    alert('Выбрана опция ' +options[sel].text);
}

