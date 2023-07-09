var prod = {
    line: ["L1D", "L2D", "L3D", "L4D", "L5D", "L6D", "L7D", "L8D", "L9D", "L10D"],
    leader: ["Bahadur", "Dammar","Dhanjit","Iqbal","Mithlesh","Rajib","Shahidul","Summan","Abutaher","Dhan","Narayan","Oyadud","Ramesh","Rewat","Sagor"],
    chemical: ["CARBITAL", "MIXPOWDER", "TERIC", "FRESSIL", "AMMONIA"],
    amount: ["2", "5", "10", "15", "20", "50"],
    unit: ["KG", "ML"]
}

var sline = function fnline(num) {
    var selectedline = prod.line[num];
    sessionStorage.setItem("kline", selectedline);
    submit();
    return selectedline;
};

var sleader = function fnleader(num) {
    var selectedleader = prod.leader[num];
    sessionStorage.setItem("kleader", selectedleader);
    submit();
    return selectedleader;
};

var schemical = function fnchemical(num) {
    var selectedchemical = prod.chemical[num];
    sessionStorage.setItem("kchemical", selectedchemical);
    submit();
    return selectedchemical;
};


var samount = function fnamount(num) {
    var selectedamount = prod.amount[num];
    sessionStorage.setItem("kamount", selectedamount);
    submit();
    return selectedamount;
};

var sunit = function fnunit(num) {
    var selectedunit = prod.unit[num];
    sessionStorage.setItem("kunit", selectedunit);
    submit();
    return selectedunit;
};

function submit() {
    var url = new URL('https://docs.google.com/forms/d/e//formResponse?usp=pp_url&entry.1000000=Babu&entry.1000001=20%25+CARBITAL&entry.496268238=2&entry.1218782774=ML&entry.1000002=L1D&submit=submit')
    var search_params = url.searchParams;
    search_params.set('entry.1000002', sessionStorage.getItem("kline"));
    search_params.set('entry.1000000', sessionStorage.getItem("kleader"));
    search_params.set('entry.1000001', sessionStorage.getItem("kchemical"));
    search_params.set('entry.496268238', sessionStorage.getItem("kamount"));
    search_params.set('entry.1218782774', sessionStorage.getItem("kunit"));
    url.search = search_params.toString();
    var new_url = url.toString();
    document.getElementById("showline").innerHTML = sessionStorage.getItem("kline");
    document.getElementById("showleader").innerHTML = sessionStorage.getItem("kleader");
    document.getElementById("showchemical").innerHTML = sessionStorage.getItem("kchemical");
    document.getElementById("showamount").innerHTML = sessionStorage.getItem("kamount");
    document.getElementById("showunit").innerHTML = sessionStorage.getItem("kunit");
    var link = document.getElementById("link");
    link.setAttribute("href", new_url);
    console.log(new_url);
}
