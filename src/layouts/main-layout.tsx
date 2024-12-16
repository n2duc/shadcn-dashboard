import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "@tanstack/react-router";

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
    </SidebarProvider>
  );
}
