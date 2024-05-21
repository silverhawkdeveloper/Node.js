import { createRequire } from 'node:module'

// Lectura json recomendada
const require = createRequire(import.meta.url)

export const lecturaJSON = (objeto) => require(objeto)
