function calcular_edad(input) {
    const resultado = document.getElementById("txt_resultado");
    const horaIngresada = input.value;

    if (!horaIngresada) {
        resultado.textContent = "Por favor ingresa una hora válida.";
        return;
    }

    const partes = horaIngresada.split(":");
    const hora = Number(partes[0]);
    const minuto = Number(partes[1]);

    let ampm;
    if (hora >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    let hora12 = hora % 12;
    if (hora12 === 0) {
        hora12 = 12;
    }

    const minutoTexto = minuto.toString().padStart(2, '0');
    const horaFormato = hora12 + ":" + minutoTexto + " " + ampm;

    if (hora >= 6 && hora < 12) {
        resultado.textContent = "¡Buenos días INGENIERO DAVID! (" + horaFormato + ")";
        

    } else if (hora >= 12 && hora < 18) {
        resultado.textContent = "¡Buenas tardes INGENIERO DAVID! (" + horaFormato + ")";
    }

}

function calcular_sexo(input) {
    const resultado = document.getElementById("txt_sexo");
    if (input.value === "M") {
        resultado.textContent = " HOLA, tu sexo es Mujer";
    } else if (input.value === "F") {
        resultado.textContent = "HOLA, tu sexo es HOMBRE";
    } else {
        resultado.textContent = "";
    }
}