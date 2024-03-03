import DashboardLayout from "@/components/layout/dashboard-layout";
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
      <DashboardLayout>{children}</DashboardLayout>
      <Toaster richColors />
    </NextAuthProvider>
  );
}
