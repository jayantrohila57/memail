import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const mailSchema = z.object({
  id: z.string(),
  subject: z.string(),
  text: z.string(),
  to: z.string(),
  from: z.string(),
  date: z.date(),
  read: z.boolean(),
  trash: z.boolean(),
  draft: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().array(),
  userId: z.string().nullish(),
})

export interface CompleteMail extends z.infer<typeof mailSchema> {
  User?: CompleteUser | null
}

/**
 * relatedMailSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedMailSchema: z.ZodSchema<CompleteMail> = z.lazy(() => mailSchema.extend({
  User: relatedUserSchema.nullish(),
}))
