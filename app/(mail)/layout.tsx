 
import MailLayout from "@/components/layout/mail-layout";
import { Toaster } from "@/components/ui/sonner";

import NextAuthProvider from "@/lib/auth/Provider";
import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (!session?.session) redirect("/auth");
  return (
    <NextAuthProvider>
      <MailLayout>{children}</MailLayout>
      <Toaster richColors />
    </NextAuthProvider>
  );
}
