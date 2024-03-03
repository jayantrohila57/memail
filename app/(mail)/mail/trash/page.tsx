import { mails } from "@/components/mail/data";
import { InboxMail } from "@/components/mail/inbox/inbox-mail";

export default async function MailPage() {
  return <InboxMail mails={mails} />;
}
