function select() {
    var sel = document.getElementById('fruits').selectedIndex;
    var options = document.getElementById('fruits').options;
    document.getElementById('text').innerHTML = 'Выбрана опция ' +options[sel].text;
    //alert('Выбрана опция ' +options[sel].text);
}





