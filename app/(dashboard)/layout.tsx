import DashboardLayout from "@/components/layout/dashboard-layout";
import { Toaster } from "@/components/ui/sonner";

import NextAuthProvider from "@/lib/auth/Provider";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <DashboardLayout>{children}</DashboardLayout>
      <Toaster richColors />
    </NextAuthProvider>
  );
}
