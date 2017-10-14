document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;

    if(target.className == 'menu__item') {
        var submenuTarget = target.getElementsByClassName('submenu');
        closeMenu();

        submenuTarget[0].style.display = 'block';
    }
};

document.onmouseover = function (event) {
    var target = event.target;

    if(target.className != 'menu__item' && target.className != 'submenu') {
        closeMenu();
    }
};

function closeMenu() {
    var menu = document.getElementById('nav');
    var submenu = document.getElementsByClassName('submenu');

    for(var i = 0; i < submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}