function calcular_suma() {
    let n1 = parseFloat(document.getElementById("txt_primer_numero").value);
    let n2 = parseFloat(document.getElementById("txt_segundo_numero").value);
    var Suma=n1 + n2;
    console.log("Suma:", n1 + n2);
    
}
function calcular_resta() {
    let n11 = parseFloat(document.getElementById("txt_primer_numero").value);
    let n22 = parseFloat(document.getElementById("txt_segundo_numero").value);
    
    var Resta=n11 - n22;
    
    console.log("Suma:", n11 - n22);
}
function calcular_multiplicacion() {
    let n13 = parseFloat(document.getElementById("txt_primer_numero").value);
    let n23 = parseFloat(document.getElementById("txt_segundo_numero").value);
Multi= n13 * n23;
    console.log("Suma:", n13 * n23);
}
function calcular_division() {
    let n14 = parseFloat(document.getElementById("txt_primer_numero").value);
    let n24 = parseFloat(document.getElementById("txt_segundo_numero").value);
var division;
    if (n24 == 0) {
division=0;
        console.log("ERROR")
    } else {
        division=n14 / n24;
        console.log("Suma:", n14 / n24);
    }
}