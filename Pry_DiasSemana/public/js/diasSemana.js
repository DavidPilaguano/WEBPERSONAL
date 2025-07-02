function seleccionarDia(arg) {
    let dia = arg.value;
    let resultado = document.getElementById('resultado');
    let lab = document.getElementById('Lab');

    resultado.classList.remove("text-danger", "text-info", "text-success");

    switch (dia) {
        case "LUNES":
            resultado.innerText = "Inicio de semana.";
            resultado.classList.add("text-danger");
            break;
        case "MARTES":
            resultado.innerText = "Segundo día de la semana.";
            resultado.classList.add("text-info");
            break;
        case "MIERCOLES":
            resultado.innerText = "Mitad de semana.";
            resultado.classList.add("text-info");
            break;
        case "JUEVES":
            resultado.innerText = "Casi es viernes.";
            resultado.classList.add("text-info");
            break;
        case "VIERNES":
            resultado.innerText = "¡Por fin viernes!";
            resultado.classList.add("text-success");
            break;
        case "SABADO":
            resultado.innerText = "Día de descanso.";
            resultado.classList.add("text-success");
            break;
        case "DOMINGO":
            resultado.innerText = "Fin de semana.";
            resultado.classList.add("text-success");
            break;
        default:
            resultado.innerText = "Por favor selecciona un día.";
            resultado.classList.add("text-info");
            break;
    }
    switch (dia) {
        case "LUNES":
        case "MARTES":
        case "MIERCOLES":
        case "JUEVES":
        case "VIERNES":
            lab.innerText = "Dia LABORABLE.";
            break;
        default:
            lab.innerText = "Dia NO LABORABLE";

            break;
    }
}
