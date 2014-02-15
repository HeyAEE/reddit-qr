// Insert_qr - A utility to insert QR codes on reddit pages
// License - GPLv3
// Author - Adam Even Engel

var qr_base = "https://api.qrserver.com/v1/create-qr-code/";

var box = document.getElementsByClassName("linkinfo")[0];
var link = encodeURIComponent(document.getElementById("shortlink-text").value);
var img_src = qr_base+"?data="+link+"&size=50x50";
var div = document.createElement("div");
var elem = document.createElement("img");

intro = document.createTextNode("QR code: ");
div.appendChild(intro);
elem.setAttribute('src', img_src);
elem.setAttribute('alt', "Scan to open on your mobile device!");
div.appendChild(elem);
box.appendChild(div);
    
