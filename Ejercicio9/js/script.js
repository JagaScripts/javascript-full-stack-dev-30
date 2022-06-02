
let entrada = prompt("Por favor introduce un texto");

comprobarCadena(entrada);

function comprobarCadena(cadena) {
    if (cadena.toUpperCase() == cadena) {

        alert(`El texto"${cadena}" contiene solo mayúsculas`);

    } else if (cadena.toLowerCase() == cadena) {

        alert(`El texto "${cadena}" contiene solo minúsculas`);

    } else {

        alert(`El texto "${cadena}" contiene mayúsculas y minúsculas`);
        
    }
}