let billA1 = document.getElementById("billAmount");
let perT1 = document.getElementById("percentageTip");
let tipA1 = document.getElementById("tipAmount");
let totalA1 = document.getElementById("totalAmount");
let tipA;
let totalA;
function show() 
{
    billA = parseInt(billA1.value);
    perT = parseInt(perT1.value);
    if (billA > 0 && perT > 0) {
        tipA = (perT * billA) / 100;
        totalA = billA + tipA;
        console.log(tipA);
        tipA1.value=tipA ;
        totalA1.value=totalA;

    }
    else
    document.getElementById("errorMessage").textContent="Please Enter a Valid Input";
}
