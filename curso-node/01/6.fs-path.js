const path = require('node:path')

// Barra separadora de las carpetas segun SO
console.log(path.sep)

// Unir rutas
const filePath = path.join('contenido', 'carpeta', 'index.js')
console.log(filePath)

// Nombre de ficheros
const base = path.basename('/Proyectos/Node.js/proyecto_tareas/index.js')
console.log(base)
// Sin extension
const base2 = path.basename('/Proyectos/Node.js/proyecto_tareas/index.js', '.js')
console.log(base2)
// Dame la extensión
const base3 = path.extname('index.js')
console.log(base3)
