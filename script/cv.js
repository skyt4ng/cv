window.onload = function () {
    removeFadeOut(document.getElementById('welcome'), 3000);
    datetime();
}

function datetime() {
    var datetoday = new Date();
    document.getElementById("time").innerHTML = datetoday;
    var dateold = new Date("11/02/2020")
    var duration = (datetoday.getTime() - dateold.getTime()) / (1000 * 3600 * 24);
    document.getElementById("duration").innerHTML = duration.toFixed(0);
    setTimeout(datetime, 500);
}

function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";

    el.style.opacity = 0;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, speed);
}
