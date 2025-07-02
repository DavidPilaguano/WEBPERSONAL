let operacion = "";
let input = document.getElementById("ca_texto");

function enviarValor(boton) {
    var valor = boton.getAttribute('data-valor');

    if (valor === "divi") {
        operacion += "/";
    } else if (valor === "multi") {
        operacion += "*";
    } else if (valor === "menos") {
        operacion += "-";
    } else if (valor === "suma") {
        operacion += "+";
    } else if (valor === "igual") {
        try {
            operacion = eval(operacion).toString();
        } catch (error) {
            operacion = "Error";
        }
    } else if (valor === "back") {
        if (operacion.length > 0) {
            operacion = operacion.slice(0, operacion.length - 1); 
        }
    } else {
        operacion += valor;  
    }

    input.value = operacion; 
}
