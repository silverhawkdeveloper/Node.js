// Instalación npm i express -E

const express = require('express')

const app = express()
const puertoDeseado = process.env.PORT ?? 3000
const dittoJSON = require('./pokemon/ditto.json')

app.disable('x-powered-by')

// Middlewares
/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // Incluimos la información en el req.body
    req.body = data
    next()
  })
}) */

// Lo anterior esta de forma nativa en express
app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

//  La última en llegar
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})
