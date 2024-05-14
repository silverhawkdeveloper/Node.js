const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(texto => {
    console.log('Primer archivo:', texto)
  })

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo_02.txt', 'utf-8')
  .then(texto => {
    console.log('Segundo archivo:', texto)
  })

/*
Para transformar en promesas lo que nativamente no podamos:
const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo ...');
fs.readFilePromise('./archivo.txt', 'utf-8', (err, text) => {
  console.log('Primer archivo:', text)
})
*/
