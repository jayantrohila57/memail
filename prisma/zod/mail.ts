import * as z from "zod"

export const mailSchema = z.object({
  id: z.string(),
  subject: z.string(),
  body: z.string(),
  to: z.string(),
  from: z.string(),
  label: z.string(),
  read: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
