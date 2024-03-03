const _ = require('lodash');
const argv = require('yargs').argv;

let x = { nombre: 'Daniel' }
let y = { apellido: 'Diaz' }
let z = [
    { nombre: 'Daniel', apellido: 'Diaz', edad: 37 },
    { nombre: 'Elisabeth', apellido: 'Olsen', edad: 35 }
]

//Concatenar un JSON.
/*
let resultado = _.assign(x, y);
console.log(resultado);
*/

//Repetir una función.
/*
_.times(4, ()=> console.log('VSCode'));
*/

//Realizar una acción si el usuario escrito por consola es correcto. Ej: node app.js --usuario Daniel
if (argv.usuario === 'Daniel') {
    //Encontrar objetos en una colección.
    let resultado = _.find(z, { nombre: 'Elisabeth' });
    console.log(resultado);
} else {
    console.log('Usuario no valido');
}