var clean = {
    line: ["L1D", "L2D", "L3D", "L4D", "L5D", "L6D", "L7D", "L8D", "L9D", "L10D"],
    tank: ["Latex+Tank+1", "Latex+Tank+2", "Coagulant+Tank", "Polymer+Tank", "Acid+Tank", "Alkaline+Tank+1", "Alkaline+Tank+2", "Rinse+Tank", "Pre-Leaching+1", "Pre-Leaching+2", "Post-Leaching+1", "Post-Leaching+2"],
    url: ["https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit",
        "https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1388396171=Rinse+Tank&submit=Submit"]
}

var sline = function fnline(num) {
    var selectedline = clean.line[num];
    var selectedurl = clean.url[num];
    sessionStorage.setItem("kline", selectedline);
    sessionStorage.setItem("kurl", selectedurl);
    submit();
    return selectedline;
};

var stank = function fntank(num) {
    var selectedtank = clean.tank[num];
    sessionStorage.setItem("ktank", selectedtank);
    submit();
    return selectedtank;
};

function submit() {
    var url = new URL(sessionStorage.getItem("kurl"));
    var search_params = url.searchParams;
    search_params.set('entry.1388396171', sessionStorage.getItem("ktank"));
    url.search = decodeURIComponent(search_params.toString());
    var new_url = url.toString();
    document.getElementById("showline").innerHTML = sessionStorage.getItem("kline");
    document.getElementById("showtank").innerHTML = sessionStorage.getItem("ktank");
    var link = document.getElementById("link");
    link.setAttribute("href", new_url);
    console.log(new_url);
}