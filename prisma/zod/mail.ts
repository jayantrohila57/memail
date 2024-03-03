import * as z from "zod"

export const mailSchema = z.object({
  id: z.string(),
  subject: z.string(),
  text: z.string(),
  to: z.string(),
  name: z.string(),
  from: z.string(),
  date: z.date(),
  label: z.string().array(),
  read: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
