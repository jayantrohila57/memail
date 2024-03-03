"use server";

import * as z from "zod";
import { db } from "@/lib/db/index";
import { getUserAuth } from "../auth/utils";

const FormSchema = z.object({
  subject: z.string(),
  text: z.string(),
  to: z.string(),
});

export const CreateMailAction = async (values: z.infer<typeof FormSchema>) => {
  const validatedFields = FormSchema.safeParse(values);
  const { session } = await getUserAuth();
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { subject, text, to } = validatedFields.data;
  try {
    await db.mail.create({
      data: {
        from: session?.user?.email!,
        name: session?.user?.name!,
        User: {
          connect: {
            email: session?.user?.email!,
          },
        },
        subject,
        text,
        to,
      },
    });
    return { success: "Mail Sent successfully." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong." };
  }
};
