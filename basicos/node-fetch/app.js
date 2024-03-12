const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/silverhawkdeveloper');

promesa.then((respuesta) => {
    return respuesta.json();
}).then((json) => {
    console.log(json);
});