const entrada = prompt('Por favor introduce un texto para comprobar si es palíndromo: ');

comprobarSiEsPalindromo(entrada);

function comprobarSiEsPalindromo(cadena) {


    let entradaSinEspacios = (cadena.split(' ').join('')).toLowerCase();
  
    let entradaSinEspaciosInvertida = entradaSinEspacios.split('').reverse().join('');
  
    let esPalindromo = (entradaSinEspaciosInvertida == entradaSinEspacios) ? 'es un palíndromo' : 'no es un palíndromo';

    alert(`El texto "${cadena}" ${esPalindromo}`);

  }