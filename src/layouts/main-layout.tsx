import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main
        className={cn(
          "min-h-svh flex-1 flex items-center flex-col px-2 pb-2",
        )}
        >
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
