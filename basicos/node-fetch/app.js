const fetch = require('node-fetch');

fetch('https://api.github.com/users/silverhawkdeveloper').then((respuesta) => {
    return respuesta.json();
}).then((json) => {
    console.log(json);
});