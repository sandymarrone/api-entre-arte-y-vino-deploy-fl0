import { randomUUID } from 'node:crypto'

// Leer JSON en ESModule
import fs from 'node:fs'
const events = JSON.parse(fs.readFileSync('./events.json', 'utf-8'))

export class EventModel {
  // Obtener todos los eventos
  static getAll = async() => {
    return events
  }

  // Obtener evento por ID
  static getId = async({id}) => {
    const event = events.find( event => event.id === id)
    return event
  }

  // Crear un nuevo evento
  static create = async({input}) => {
    const newEvent = {
      id: randomUUID(),
      ...input
    }

    events.push(newEvent)

    return newEvent
  }
}