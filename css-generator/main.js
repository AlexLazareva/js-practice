function changeBrds() {
    var rtl = document.getElementById('rngTopLeft').value;
    var ttl = document.getElementById('txtTopLeft');

    var rtr = document.getElementById('rngTopRight').value;
    var ttr = document.getElementById('txtTopRight');

    var rbl = document.getElementById('rngBottomLeft').value;
    var tbl = document.getElementById('txtBottomLeft');

    var rbr = document.getElementById('rngBottomRight').value;
    var tbr = document.getElementById('txtBottomRight');

    var block = document.getElementById('result');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}
