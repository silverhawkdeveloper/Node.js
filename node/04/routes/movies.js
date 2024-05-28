import { Router } from 'express'
import { MovieController } from '../controlador/movies.js'

export const moviesRoute = Router()

moviesRoute.get('/', MovieController.getAll)
moviesRoute.get('/:id', MovieController.getID)
moviesRoute.post('/', MovieController.createMovie)
moviesRoute.patch('/:id', MovieController.updateMovie)
moviesRoute.delete('/:id', MovieController.deleteMovie)
