import { lecturaJSON } from '../utils.js'
import crypto from 'node:crypto'

// Lectura json ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
// En el futuro import movies from './movies.json' with { types: 'json' }
const movies = lecturaJSON('./movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const filtroGenero = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
      return filtroGenero
    }
    return movies
  }

  static async getID ({ id }) {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static async createMovie ({ movie }) {
    const newMovies = {
      id: crypto.randomUUID(),
      ...movie.data
    }
    movies.push(newMovies)
    return newMovies
  }

  static async updateMovie ({ id, resultado }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    const updateMovie = {
      ...movies[movieIndex],
      ...resultado.data
    }
    movies[movieIndex] = updateMovie
    return updateMovie
  }

  static async deleteMovie ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex) { movies.splice(movieIndex, 1); return true }
    return false
  }
}
