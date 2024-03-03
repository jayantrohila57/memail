import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });