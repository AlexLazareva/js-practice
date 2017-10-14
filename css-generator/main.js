function changeBrds() {
    var rtl = document.getElementById('rngTopLeft').value;
    var ttl = document.getElementById('txtTopLeft').value;

    var rtr = document.getElementById('rngTopRight').value;
    var ttr = document.getElementById('txtTopRight').value;

    var rbl = document.getElementById('rngBottomLeft').value;
    var tbl = document.getElementById('txtBottomLeft').value;

    var rbr = document.getElementById('rngBottomRight').value;
    var tbr = document.getElementById('txtBottomRight').value;

    var block = document.getElementById('result');

    ttl.value = rtl;
    rtr.value = rtr;
    rbl.value = tbl;
    rbr.value = tbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}
