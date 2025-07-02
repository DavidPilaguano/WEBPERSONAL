function seleccionarUsuario(arg) {
    let nombre_usuario = arg.value;
    let estado_inactivo = document.getElementById("inactivo");
    let estado_activo = document.getElementById("activo");
    let txt_estado = document.getElementById("txt_estado");
    let txt_permiso = document.getElementById("txt_permiso");
    let txt_estadosAd = document.getElementById("txt_estadosAd");
    let txt_resumen = document.getElementById("txt_resumen");

    txt_estado.textContent = "";
    txt_permiso.textContent = "";
    txt_estadosAd.textContent = "";
    txt_resumen.textContent = "";


    if ((!nombre_usuario || nombre_usuario === "Seleccione opción") && (!estado_activo.checked && !estado_inactivo.checked)) {
        txt_estado.textContent = "Por favor selecciona un usuario y un estado.";
        return;
    }
    if (!nombre_usuario || nombre_usuario === "Seleccione opción") {
        txt_estado.textContent = "Por favor selecciona un usuario.";
        return;
    }
    if (!estado_activo.checked && !estado_inactivo.checked) {
        txt_estadosAd.textContent = "Por favor selecciona un estado para el usuario: " + nombre_usuario;
        return;
    }

    let estado = "";
    if (estado_activo.checked) {
        estado = "Activo";
    } else if (estado_inactivo.checked) {
        estado = "Inactivo";
    }

if (nombre_usuario === "ADMIN") {
    if (estado === "Activo") {
        txt_permiso.textContent = "El usuario: " + nombre_usuario + " | Estado: " + estado+" tiene permisos.";
        txt_permiso.classList.remove("text-danger");
        txt_permiso.classList.add("text-success");
    } else {
        txt_permiso.textContent = "El usuario: " + nombre_usuario + " | Estado: " + estado+" NO tiene permisos.";
        txt_permiso.classList.remove("text-success");
        txt_permiso.classList.add("text-danger");
    }
} else {
    txt_permiso.textContent = "El usuario: " + nombre_usuario + " | Estado: " + estado+ " NO tiene permisos.";
    txt_permiso.classList.remove("text-success");
    txt_permiso.classList.add("text-danger");
}

    //txt_estado.textContent = "Usuario: " + nombre_usuario + " | Estado: " + estado;
   // txt_estadosAd.textContent = "Usuario: " + nombre_usuario + " | Estado: " + estado;
}

// Reconocimiento de voz
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const txtArea = document.getElementById('txtArea');

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResults = false;

btnStart.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    recognition.abort();
});

recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    txtArea.value += transcript + '\n';
};

recognition.onerror = (event) => {
    console.error('Error de reconocimiento:', event.error);
};