import crypto from 'node:crypto'
import { Router } from 'express'
import { lecturaJSON } from '../utils.js'
import { validacionMovies, validacionParcialMovies } from '../schemas/movies-schemas.js'

export const moviesRoute = Router()
const movies = lecturaJSON('./movies.json')
// Lectura json ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
// En el futuro import movies from './movies.json' with { types: 'json' }

// Recuperar todas las peliculas o todas las peliculas de un genero
moviesRoute.get('/', (req, res) => {
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
moviesRoute.get('/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) {
    return res.status(200).json(movie)
  } else {
    res.status(404).json({ mensaje: 'Movie not found' })
  }
})

// Crear una película
moviesRoute.post('/', (req, res) => {
  const resultado = validacionMovies(req.body)
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

// Actualizar una película
moviesRoute.patch('/:id', (req, res) => {
  const resultado = validacionParcialMovies(req.body)
  if (!resultado.success) {
    return res.status(400).json({ error: JSON.parse(resultado.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)
  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...resultado.data
  }
  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

// Borrar una película
moviesRoute.delete('/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)
  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Película eliminada' })
})
