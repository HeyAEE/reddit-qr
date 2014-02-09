// Insert_qr - A utility to insert QR codes on reddit pages
// License - GPLv3
// Author - Adam Even Engel

function add_qr() {
    var qr_base = "https://api.qrserver.com/v1/create-qr-code/"
    var box = document.getElementById("linkinfo");
    var link = encodeURIComponent(document.getElementById("shortlink-text"));
    var img_src = qr_base+"?data="+link+"&size=50x50";
    var elem = document.createElement("img");
    box.appendChild(document.createTextNode("QR code: "));
    elem.setAttribute('src', img_src);
    elem.setAttribute('alt', "Scan to open on your mobile device!");
    box.appendChild(elem);
}
    