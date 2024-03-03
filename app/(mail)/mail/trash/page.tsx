import { InboxMail } from "@/components/mail/inbox/inbox-mail";
import { db } from "@/lib/db/index";
export default async function MailPage() {
  const mails = await db?.mail?.findMany({ where: { trash: true } });
  return <InboxMail mails={mails || []} />;
}
