import { Toaster } from "@/components/ui/sonner";
import { checkAuth } from "@/lib/auth/utils";

import NextAuthProvider from "@/lib/auth/Provider";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (
    <NextAuthProvider>
      {children}
      <Toaster richColors />
    </NextAuthProvider>
  );
}
