const express = require('express')
const crypto = require('node:crypto') // Creación de ID
const movies = require('./movies.json')
const { validacionMovies } = require('./schemas/movies-schemas')

// REST API -> Arquitectura de software

const puertoDeseado = process.env.PORT ?? 3000
const app = express()
app.use(express.json())
app.disable('x-powered-by')

// Recuperar todas las peliculas o todas las peliculas de un genero
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filtroGenero = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.status(200).json(filtroGenero)
  }
  res.status(200).json(movies)
})

// Recuperar una pelicula por id
app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movies => movies.id === id)
  if (movie) {
    return res.status(200).json(movie)
  } else {
    res.status(404).json({ mensaje: 'Movie not found' })
  }
})

// Crear una película
app.post('/movies', (req, res) => {
  const resultado = validacionMovies(req.body)
  console.log(resultado)
  if (resultado.error) {
    return res.status(400).json({ error: JSON.parse(resultado.error.message) })
  }

  const newMovies = {
    id: crypto.randomUUID(),
    ...resultado.data
  }
  movies.push(newMovies)
  res.status(201).json(newMovies)
})

app.listen(puertoDeseado, () => {
  console.log(`Servidor en el puerto http://localhost:${puertoDeseado}`)
})
