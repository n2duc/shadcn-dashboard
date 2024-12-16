import { History, Star, BellRing } from "lucide-react";
import CommandSearchDialog from "./command-dialog";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { useChildMatches } from "@tanstack/react-router";

export default function Header() {
  const matches = useChildMatches();
  const breadcrums = matches.map(match => match.pathname.slice(1));

  return (
    <div className="w-full py-2 sticky top-0 right-0 z-50">
      <header className="flex items-center justify-between w-full p-2 gap-4 bg-sidebar/90 backdrop-blur rounded-lg border border-sidebar-border">
        <div className="flex shrink-0 items-center gap-2">
          <SidebarTrigger />
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Star />
          </Button>
          <Breadcrumb className="hidden lg:inline-block">
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrums.map((breadcrum) => (
                <>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{breadcrum ? breadcrum : "Default"}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full flex-1 md:w-auto md:flex-none flex items-center gap-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearchDialog />
          </div>
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <BellRing />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <History />
          </Button>
        </div>
      </header>
    </div>
  );
}
