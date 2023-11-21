// incoming chemical TSC
var chemical1_tsc = 0.1 * 100;
var chemical2_tsc = 0.2 * 100;
var chemical3_tsc = 0.3 * 100;
var chemical4_tsc = 0.4 * 100;
var chemical5_tsc = 0.5 * 100;
var chemical6_tsc = 0.6 * 100;
var chemical7_tsc = 0.7 * 100;

//create balancelatex, addlatex, newlatex object
var balancelatex = {
    latex_tsc: 0,
    total_kg: 0,
    total_waterkg: 0,
    total_latexkg: 0,
}

var addlatex = {
    total_kg: 0,
    water: 0,
    total_60latexkg: 0,
    latex_tsc: 0,
    latex_phr: 100,
    chemical1_phr: 0,
    chemical1_kg: 0,
    chemical2_phr: 0,
    chemical2_kg: 0,
    chemical3_phr: 0,
    chemical3_kg: 0,
    chemical4_phr: 0,
    chemical4_kg: 0,
    chemical5_phr: 0,
    chemical5_kg: 0,
    chemical6_phr: 0,
    chemical6_kg: 0,
    chemical7_phr: 0,
    chemical7_kg: 0,
    latex_factor: 0,
}

var newlatex = {
    total_kg: 0,
    water: 0,
    total_60latexkg: 0,
    latex_tsc: 0,
    latex_phr: 100,
    chemical1_phr: 0,
    chemical1_kg: 0,
    chemical2_phr: 0,
    chemical2_kg: 0,
    chemical3_phr: 0,
    chemical3_kg: 0,
    chemical4_phr: 0,
    chemical4_kg: 0,
    chemical5_phr: 0,
    chemical5_kg: 0,
    chemical6_phr: 0,
    chemical6_kg: 0,
    chemical7_phr: 0,
    chemical7_kg: 0,
    latex_factor: 0,
}

function repeat() {
    document.getElementById("addlatex.latex_tsc").innerHTML = addlatex.latex_tsc;
}

// New type latex, write latex factor and filler phr
function NUSA() {
    addlatex.latex_factor = 90;
    addlatex.chemical4_phr = 50;
    addlatex.chemical1_phr = 0.21;
    addlatex.chemical2_phr = 0.22;
    addlatex.chemical3_phr = 0.23;
    addlatex.chemical5_phr = 0.24;
    addlatex.chemical6_phr = 0.25;
    addlatex.chemical7_phr = 0.26;
    repeat();
}

function USA() {
    addlatex.latex_factor = 80;
    addlatex.chemical4_phr = 30;
    addlatex.chemical1_phr = 0.21;
    addlatex.chemical2_phr = 0.22;
    addlatex.chemical3_phr = 0.23;
    addlatex.chemical5_phr = 0.24;
    addlatex.chemical6_phr = 0.25;
    addlatex.chemical7_phr = 0.26;
    repeat();
}


// New type latex, write latex tsc
function NUSAlow() {
    NUSA();
    addlatex.latex_tsc = 30;
}

function NUSAnormal() {
    NUSA();
    addlatex.latex_tsc = 31;
}

function NUSAhigh() {
    NUSA();
    addlatex.latex_tsc = 32;
}

function USA1high() {
    NUSA();
    addlatex.latex_tsc = 33;
}

function USA1normal() {
    USA();
    addlatex.latex_tsc = 34;
}

function USA1low() {
    USA();
    addlatex.latex_tsc = 35;

}

function USA2() {
    USA();
    addlatex.latex_tsc = 19.5;
}

// calculation
function calculate() {
    // calculation of 60% latex
    var running_lines = document.querySelector("#running_lines").value;
    // var balancelatex_total = document.querySelector("#balance_latex_total").value;
    // balancelatex.total_kg = Number(balancelatex_total);
    balancelatex.total_kg = Number(document.querySelector("#balance_latex_total").value);
    newlatex.total_kg = running_lines * 450 * 12;
    addlatex.total_kg = newlatex.total_kg - balancelatex.total_kg;
    addlatex.total_60latexkg = addlatex.total_kg * addlatex.latex_tsc / addlatex.latex_factor;


    // calculation of add chemicals
    addlatex.chemical4_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical4_phr) / chemical4_tsc;
    addlatex.chemical1_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical1_phr) / chemical1_tsc;
    addlatex.chemical2_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical2_phr) / chemical2_tsc;
    addlatex.chemical3_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical3_phr) / chemical3_tsc;
    addlatex.chemical5_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical5_phr) / chemical5_tsc;
    addlatex.chemical6_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical6_phr) / chemical6_tsc;
    addlatex.chemical7_kg = (addlatex.total_60latexkg * 0.6 * addlatex.chemical7_phr) / chemical7_tsc;

    // calculation of water
    addlatex.water = addlatex.total_kg - addlatex.chemical4_kg - addlatex.chemical1_kg - addlatex.chemical2_kg - addlatex.chemical3_kg - addlatex.chemical5_kg - addlatex.chemical6_kg - addlatex.chemical7_kg;


    // showing result
    document.getElementById("addlatex.total_60latexkg").innerHTML = addlatex.total_60latexkg.toFixed(2).toLocaleString();
    document.getElementById("addlatex.chemical4_kg").innerHTML = addlatex.chemical4_kg.toFixed(2);
    document.getElementById("addlatex.chemical1_kg").innerHTML = addlatex.chemical1_kg.toFixed(2);
    document.getElementById("addlatex.chemical2_kg").innerHTML = addlatex.chemical2_kg.toFixed(2);
    document.getElementById("addlatex.chemical3_kg").innerHTML = addlatex.chemical3_kg.toFixed(2);
    document.getElementById("addlatex.chemical5_kg").innerHTML = addlatex.chemical5_kg.toFixed(2);
    document.getElementById("addlatex.chemical6_kg").innerHTML = addlatex.chemical6_kg.toFixed(2);
    document.getElementById("addlatex.chemical7_kg").innerHTML = addlatex.chemical7_kg.toFixed(2);
    document.getElementById("addlatex.water").innerHTML = addlatex.water.toFixed(2);
}

// selfchecking
function check() {
    console.log(addlatex);
    console.log(addlatex.total_60latexkg);
    console.log(balancelatex.total_kg);
}