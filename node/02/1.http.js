const http = require('node:http')
const fs = require('node:fs')

const puertoDeseado = process.env.PORT ?? 3000

const peticion = (req, res) => {
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
}

const servidor = http.createServer(peticion)

servidor.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})

// Aparece 2 veces en la consola por la peticion y favicon
// HTTP -> Protocolo para transmitir información
// node --watch reinicia al guardar, sino nodemon (-D)

/*
Página para comprobar http.cat
100 - 199 Respuestas informativas
200 - 299 Respuestas satisfactoria
300 - 399 Redirecciones
400 - 499 Errores del cliente
500 - 599 Errores del servidor
*/
