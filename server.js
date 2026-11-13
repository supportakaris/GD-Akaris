import compression from 'compression'
import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const app = express()
const root = path.dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(compression())
app.use(express.static(path.join(root, 'dist'), { maxAge: '1y', immutable: true }))
app.get('*path', (_request, response) => response.sendFile(path.join(root, 'dist', 'index.html')))

app.listen(port, () => console.log(`AKARIS Digital disponible en http://localhost:${port}`))
