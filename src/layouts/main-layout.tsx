import { cn } from "@/lib/utils";
import { Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main
        className={cn(
          "min-h-svh flex-1 flex items-center flex-col px-2 pb-2 w-full",
        )}
        >
        <Header />
        <div className="w-full flex-1 flex flex-col gap-2 rounded-lg">
          <Outlet />
        </div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
