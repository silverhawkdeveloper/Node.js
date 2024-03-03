//Asincrono -> diferentes operaciones en un espacio de tiempo.
//Sincrono  -> las operaciones esta de forma secuencial.

const fs = require('fs');

console.log('Iniciado');
//Se inicia al final.
/*
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(data);
    }
})
*/
// Se inicia segun en la posición en que se encuentre.
let data = fs.readFileSync('data.txt', 'utf-8')
console.log(data);

console.log('Finalizado');

//Cambiar nombre del archivo.
/*
fs.rename('data.txt', 'data_rem.txt', (error)=>{
    if (error) throw error;
    console.log('Renombrado');
})
*/

//Escibir en un archivo.
/*
fs.appendFile('data.txt', '\nHola Daniel', (error) => {
    if (error) console.log(`Error ${error}`);
})
*/

//Borrar un archivo.
/*
fs.unlink('data2.txt', (error) => {
    if (error) throw error;
    console.log('Eliminado');
})
*/

//Copiar un archivo.
/*
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));
*/

//Leer contenido de un directorio.
fs.readdir('../', (error, files) => {
    files.forEach(file => {
        console.log(file);
    })
})