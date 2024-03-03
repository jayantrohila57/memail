import { mails } from "@/components/mail/data";
import { Mail } from "@/components/mail/mail";

export default async function MailPage() {
  return <Mail mails={mails} />;
}
