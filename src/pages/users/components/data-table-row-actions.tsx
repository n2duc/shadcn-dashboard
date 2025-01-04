import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/lib/services";
import { Label } from "@/components/ui/label";
import { type User } from "@/types";

interface WithId<T> {
  id: T;
}

interface DataTableRowActionsProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  row: Row<TData>;
}

export default function DataTableRowActions<TData extends WithId<string>>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isViewOpen, setIsViewOpen] = useState<boolean>(false);
  const userId = row.original.id as string;

  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
    enabled: isViewOpen,
  })

  return (
    <>
      <ResponsiveDialog isOpen={isViewOpen} setIsOpen={setIsViewOpen} title="User Detail">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading user details</p>
        ) : user ? (
          <div className="grid gap-3 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">ID:</Label>
              <p className="col-span-3">{user.id}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">First Name:</Label>
              <p className="col-span-3">{user.firstName}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Last Name:</Label>
              <p className="col-span-3">{user.lastName}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Username:</Label>
              <p className="col-span-3">{user.username}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Email:</Label>
              <p className="col-span-3">{user.email}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Birth Date:</Label>
              <p className="col-span-3">{user.birthDate}</p>
            </div>
          </div>
        ) : null}
      </ResponsiveDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(userId);
              toast("User ID copied to clipboard", {
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          >
            Copy user ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsViewOpen(true)}>View Details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
