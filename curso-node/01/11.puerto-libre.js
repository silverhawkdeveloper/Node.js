const net = require('node:net')

function findAvailablePort (puertoDeseado) {
  return new Promise((resolve, reject) => {
    const servidor = net.createServer()

    servidor.listen(puertoDeseado, () => {
      const puerto = servidor.address().port
      servidor.close(() => {
        resolve(puerto)
      })
    })

    servidor.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(puerto => resolve(puerto))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
