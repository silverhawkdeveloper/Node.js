const http = require('node:http')
const { findAvailablePort } = require('./11.puerto-libre')

const puertoDeseado = process.env.PORT ?? 3000

const servidor = http.createServer((req, res) => {
  console.log('request recibida')
  res.end('Hola Daniel')
})

findAvailablePort(puertoDeseado).then(puerto => {
  servidor.listen(puerto, () => {
    console.log(`Servidor en el puerto http://localhost:${puerto}`)
  })
})
