const { readFile } = require('node:fs/promises')

async function init () {
  console.log('Leyendo el primer archivo...')
  const texto01 = await readFile('./archivo.txt', 'utf-8')
  console.log('Primer archivo:', texto01)

  console.log('Leyendo el segundo archivo...')
  const texto02 = await readFile('./archivo_02.txt', 'utf-8')
  console.log('Segundo archivo:', texto02)
}

init()

// IIFE - Inmediatly Invoked Function Expression
// (
//   async () => {
//     console.log('Leyendo el primer archivo...')
//     const texto01 = await readFile('./archivo.txt', 'utf-8')
//     console.log('Primer archivo:', texto01)

//     console.log('Leyendo el segundo archivo...')
//     const texto02 = await readFile('./archivo2.txt', 'utf-8')
//     console.log('Segundo archivo:', texto02)
//   }
// )()
