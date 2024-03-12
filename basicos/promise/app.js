const promesa = require("./promesa");

promesa.calcular(2, 2).then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});
