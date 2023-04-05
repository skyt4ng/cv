var former = {
    line: ["L1D", "L2D", "L3D", "L4D", "L5D", "L6D", "L7D", "L8D", "L9D", "L10D"],
    row: ["1", "2", "3", "4"],
    size: ["XS", "S", "M", "L", "XL", "XS.s", "S.s", "M.s", "L.s", "XL.s"],
    url: ['https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit',
        'https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1607464370=1&entry.89509793=XS&submit=submit']
}

var sline = function fnline(num) {
    var selectedline = former.line[num];
    var selectedurl = former.url[num];
    sessionStorage.setItem("kline", selectedline);
    sessionStorage.setItem("kurl", selectedurl);
    submit();
    return selectedline;
};

var srow = function fnrow(num) {
    var selectedrow = former.row[num];
    sessionStorage.setItem("krow", selectedrow);
    submit();
    return selectedrow;
};

var ssize = function fnsize(num) {
    var selectedsize = former.size[num];
    sessionStorage.setItem("ksize", selectedsize);
    submit();
    return selectedsize;
};

function submit() {
    var url = new URL (sessionStorage.getItem("kurl"));
    var search_params = url.searchParams;
    search_params.set('entry.1607464370', sessionStorage.getItem("krow"));
    search_params.set('entry.89509793', sessionStorage.getItem("ksize"));
    url.search = search_params.toString();
    var new_url = url.toString();
    document.getElementById("showline").innerHTML = sessionStorage.getItem("kline");
    document.getElementById("showrow").innerHTML = sessionStorage.getItem("krow");
    document.getElementById("showsize").innerHTML = sessionStorage.getItem("ksize");
    var link = document.getElementById("link");
    link.setAttribute("href", new_url);
    console.log(new_url);
}