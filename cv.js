// loader script
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#lds-hourglass").style.visibility = "visible";
    } else {
        document.querySelector("#lds-hourglass").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};





// Windows Onload
window.onload = function () {
    removeFadeOut(document.getElementById('welcome'), 1000);
    datetime();
}

// Calculate Days
function datetime() {
    var datetoday = new Date();
    document.getElementById("time").innerHTML = datetoday;
    var dateold = new Date("06/06/2023")
    var duration = (datetoday.getTime() - dateold.getTime()) / (1000 * 3600 * 24);
    document.getElementById("duration").innerHTML = duration.toFixed(0);
    setTimeout(datetime, 500);
}

// Welcome div fadeout
function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";
    el.style.opacity = 0;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, speed);
}

// Page Scrolling
window.onscroll = function () { scrolling() };

function scrolling() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollbar").style.width = scrolled + "%";

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}