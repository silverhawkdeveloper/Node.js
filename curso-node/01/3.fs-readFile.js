const fs = require('node:fs') // Recomendado poner node:__

/*
// Forma asincrona

console.log('Leyendo el primer archivo ...');
const text1 = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text1);

console.log('Leyendo el segundo archivo ...');
const text2 = fs.readFileSync('./archivo_02.txt', 'utf-8')
console.log(text2);
*/

/*
// Forma sincrona

Call back funciones que se ejecutan cuando finaliza una tarea
*/
console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
  console.log('Primer archivo:', text)
})

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo_02.txt', 'utf-8', (_err, text) => {
  console.log('Segundo archivo:', text)
})
