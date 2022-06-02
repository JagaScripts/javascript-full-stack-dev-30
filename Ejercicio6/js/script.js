const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Pedimos al usuario que introduzca los números del DNI
let numerosDni = prompt('Porfavor introduce los números de tu DNI: ');

//Pedimos al usuario que introduzca la letra del DNI
let letraDni = prompt('Porfavor introduce la letra de tu DNI: ');



if (numerosDni < 0 || numerosDni > 99999999) {
    alert('El úmero no es válido');

}
let letraCorrecta = numerosDni % 23;

if (letras[letraCalculada] != letraDni) {

    alert('Ha este dni no le corresponde esta letra');
    
} else {

    alert('Hay correspondencia entre el deni y la letra');
}

