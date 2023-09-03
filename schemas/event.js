import z from 'zod'

const eventSchema = z.object({
  name: z.string({
    invalid_type_error: 'Event name must be a string',
    required_error: 'Event title is required'
  }),
  date: z.string({
    invalid_type_error: 'Event date must be a string',
    required_error: 'Event date is required'
  }),
  place: z.string({
    invalid_type_error: 'Event place must be a string',
    required_error: 'Event place is required'
  })
})

export function validateEvent(object) {
  return eventSchema.safeParse(object)
}