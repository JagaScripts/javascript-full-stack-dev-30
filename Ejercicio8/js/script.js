let numero = prompt("Porfavor introduce un numero entero: ");

comprobarSiParImpar(numero);

function comprobarSiParImpar(paramametro) {
   
    let siEsParImpar = (paramametro % 2 == 0) ? 'es par' : 'es impar';

   alert(`${paramametro} ${siEsParImpar}`);

}