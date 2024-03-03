console.log('Entrando en el modulo.js');

//Mandamos una variable
let numero = 37;
module.exports.numero = numero;

//Mandamos una función
function saludar() {
    console.log('Hola a todos');
}
module.exports.saludar1 = saludar();

//Mandamos una función de la forma normal
module.exports.saludar2 = function() {
    console.log('Hola a todos de forma mas habitual');
}

/* Comentar anteriores export para visualizar este
//Otras formas
module.exports = {
    nombre : 'Daniel',
    saludo : function() {
        console.log('Hola a todos, soy ' + this.nombre);
    }
}*/