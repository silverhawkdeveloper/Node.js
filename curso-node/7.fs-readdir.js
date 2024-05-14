const fs = require('node:fs')

const carpeta = process.argv[2] ?? '.'
// Escribimos en la consola la carpeta que deseamos leer
// ej: node .\7.fs-readdir.js .\ESModules\

fs.readdir(carpeta, (err, files) => {
  if (err) {
    console.error('Error en la lectura: ', err)
  } else {
    files.forEach(file => {
      console.log(file)
    })
  }
})
