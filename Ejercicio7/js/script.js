let numero = prompt('Porfavor introduce un numero entero: ');
let factorial = 1;

for (let i = numero; i > 0; i--) {
    factorial *= i;
}

alert (`El factorial del numero ${numero} es ${factorial}`);