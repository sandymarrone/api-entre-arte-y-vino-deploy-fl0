import express, { json } from 'express'
import cors from 'cors'
import router from './routes/events.js'

const app = express()
app.disabled('x-powered-by')

app.use(json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'Bienvenido a la API de Entre Arte y Vino'})
})

app.use('/events', router)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})