import { InboxMail } from "@/components/mail/inbox/inbox-mail";
import { getUserAuth } from "@/lib/auth/utils";
import { db } from "@/lib/db/index";
export default async function MailPage() {
  const data = await getUserAuth();
  const mails = await db?.mail?.findMany({
    where: { from: data.session?.user.email },
  });
  return <InboxMail mails={mails || []} />;
}
