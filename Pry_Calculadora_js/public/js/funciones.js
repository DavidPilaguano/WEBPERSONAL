const pantalla = document.getElementById('txt_pantalla');

function agregarNumero(num) {
    if (pantalla.value === "0") {
        pantalla.value = num;
    } else {
        pantalla.value += num;
    }
}

function seleccionarOp(op) {
    const ultimo = pantalla.value.slice(-1);
    if ("+-*/".includes(ultimo)) {
        pantalla.value = pantalla.value.slice(0, -1) + op; 
    } else {
        pantalla.value += op;
    }
}

function limpiarPantalla() {
    pantalla.value = "0";
}

function calcularResultado() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}
