const os = require('os');
const fs = require('fs');

let cpu = os.cpus();

//Crear un archivo
fs.appendFile('miArchivo.txt', JSON.stringify(cpu), function (error) {
    if (error) {
        console.log('Error al crear el archivo');
    }
});
