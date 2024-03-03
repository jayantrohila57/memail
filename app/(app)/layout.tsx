import Header from "@/components/layout/header";
import HeaderLayout from "@/components/layout/header-layout";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      {children}
    </main>
  );
}
