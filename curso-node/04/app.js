import express from 'express'
import { moviesRoute } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const puertoDeseado = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.use(corsMiddleware())

app.use('/movies', moviesRoute)

app.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})
