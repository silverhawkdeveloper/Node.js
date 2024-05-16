const express = require('express')

// REST API -> Arquitectura de software

const puertoDeseado = process.env.PORT ?? 3000
const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.status(200).json({ mensaje: 'Hola Daniel' })
})

app.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})
