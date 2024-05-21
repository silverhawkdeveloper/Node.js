import { MovieModel } from '../modelo/movie.js'
import { validacionMovies, validacionParcialMovies } from '../schemas/movies-schemas.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    res.status(200).json(movies)
  }

  static async getID (req, res) {
    const { id } = req.params
    const movie = await MovieModel.getID({ id })
    if (movie) {
      return res.status(200).json(movie)
    } else {
      res.status(404).json({ mensaje: 'Película no encontrada' })
    }
  }

  static async createMovie (req, res) {
    const resultado = validacionMovies(req.body)
    if (resultado.error) {
      return res.status(400).json({ error: JSON.parse(resultado.error.message) })
    }
    const newMovies = await MovieModel.createMovie({ resultado })
    res.status(201).json(newMovies)
  }

  static async updateMovie (req, res) {
    const resultado = validacionParcialMovies(req.body)
    if (!resultado.success) {
      return res.status(400).json({ error: JSON.parse(resultado.error.message) })
    }

    const { id } = req.params
    const updateMovie = await MovieModel.updateMovie({ id, resultado })
    if (updateMovie.id === -1) {
      return res.status(404).json({ message: 'Película no encontrada' })
    }
    return res.json(updateMovie)
  }

  static async deleteMovie (req, res) {
    const { id } = req.params
    const respuesta = await MovieModel.deleteMovie({ id })
    if (respuesta) {
      return res.json({ message: 'Película eliminada' })
    } else {
      return res.status(404).json({ message: 'Movie not found' })
    }
  }
}
