const express = require('express')
const crypto = require('node:crypto')
const cors = require('cors')

const event = require('./event.json')
const { validateEvent } = require('./schemas/event')

const app = express()
app.use(express.json())
app.use(cors())
app.disabled('x-powered-by')

app.get('/', (req, res) => {
  res.json({message: 'Bienvenido a la API de Entre Arte y Vino'})
})

app.get('/event', (req, res) => {
  res.json(event)
})

app.post('/event', (req, res) => {
  const result = validateEvent(req.body)

  if (result.error) {
    return res.status(400).json({error: JSON.parse(result.error.message)})
  }

  const newEvent = {
    id: crypto.randomUUID(),
    ...result.data
  }

  event.push(newEvent)

  res.status(201).json(newEvent) // actulizar la caché del cliente
})


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})