import { EventModel } from "../models/event.js"
import { validateEvent } from "../schemas/event.js"

export class EventController {
  static getAll = async (req, res) => {
    const events = await EventModel.getAll()
    res.json(events)
  }

  static getId = async (req, res) => {
    const { id } = req.params
    const event = await EventModel.getId({ id })
    if (event) return res.json(event)
    res.status(404).json({ message: 'Event not found' })
  }

  static create = async (req, res) => {
    const result = validateEvent(req.body)

    if (result.error) {
      return res.status(400).json({error: JSON.parse(result.error.message)})
    }

    const newEvent = await EventModel.create({ input: result.data })

    res.status(201).json(newEvent) // actulizar la caché del cliente
  }
}