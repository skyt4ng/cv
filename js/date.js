window.onload = datetime;

function datetime(){
    var datetoday = new Date();
    document.getElementById("time").innerHTML = datetoday;
    var dateold=new Date("11/02/2020")
    var duration=(datetoday.getTime()-dateold.getTime())/ (1000 * 3600 * 24);
    document.getElementById("duration").innerHTML = duration.toFixed(0);
}