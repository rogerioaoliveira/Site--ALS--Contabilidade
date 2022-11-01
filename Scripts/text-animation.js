var i = 0;
var tag = document.getElementById("line");
var html = document.getElementById("line").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 60;

function typeWriter() {
    if (i <= txt.length) {
    document.getElementById("line").innerHTML = txt.slice(0 , i + 1);
    i++;
    setTimeout(typeWriter, speed);
    }
}

typeWriter();