import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main
        className={cn(
          "min-h-svh flex-1 flex items-center flex-col px-2 pb-2",
        )}
        >
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
