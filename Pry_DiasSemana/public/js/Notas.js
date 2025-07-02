function calcularNota(args) {
    let nota = parseFloat(args.value);
    let resultado = document.getElementById('resultado');


    resultado.classList.remove("text-danger", "text-info", "text-success");

    resultado.innerText=(nota>=15&&nota<=20)?"Aprobado Excelente":(nota>=0&&nota<=15)?"Desaprobado":"Fuera rango";


    // switch (true) {
    //     case (nota >= 18 && nota <= 20):
    //         resultado.innerText = "Excelente";
    //                     resultado.classList.add("text-success");
    //         break;

    //         break;
    //     case (nota >= 0 && nota < 15):
    //         resultado.innerText = "Reprobado";
    //                     resultado.classList.add("text-danger");
    //         break;
    //     default:
    //         resultado.innerText = "Nota fuera de rango";
    //                     resultado.classList.add("text-info");
    //         break;
    // }
    
}