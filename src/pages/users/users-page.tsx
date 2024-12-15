import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

export default function UsersPage() {
  return (
    <Card className="bg-sidebar">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage Users Account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Input placeholder="Filter name..." className="max-w-sm" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
};
