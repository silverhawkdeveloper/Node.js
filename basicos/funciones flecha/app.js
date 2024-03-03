const miModulo = require('./modulo.js');

let suma = miModulo.sumar(10, 5);
console.log(suma);

let resta = miModulo.restar(12, 6);
console.log(resta);

let dividir = miModulo.dividir(10)
console.log(dividir);

setTimeout(() => {
    console.log('Termine');
}, 2000);