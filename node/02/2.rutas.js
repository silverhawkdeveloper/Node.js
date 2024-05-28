const http = require('node:http')
// const fs = require('node:fs')

const puertoDeseado = process.env.PORT ?? 3000
const dittoJSON = require('./pokemon/ditto.json')

const peticion = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':{
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
    }
    case 'POST':{
      switch (url) {
        case '/pokemon':{
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
        }
          break

        default:{
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found') }
      }
    }
  }
  /*
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Página de inicio</h1>')
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./elizabeth-olsen.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
  */
}

const servidor = http.createServer(peticion)

servidor.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})
