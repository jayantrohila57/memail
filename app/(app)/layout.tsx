import Header from "@/components/layout/header";
import HeaderLayout from "@/components/layout/header-layout";
import { checkAuth } from "@/lib/auth/utils";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (
    <main>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      {children}
    </main>
  );
}
