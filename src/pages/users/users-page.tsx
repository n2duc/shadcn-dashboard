import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./components/data-table";
import { columns } from "./components/columns";
import { getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import DataTablePagination from "./components/pagination";

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function UsersPage() {
  const [showUsernameBar, setShowUsernameBar] = useState<Checked>(false);
  const [showEmailBar, setShowEmailBar] = useState<Checked>(false);
  const [sorting, setSorting] = useState<SortingState>([])

  const { isPending, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://dummyjson.com/users?limit=50&select=firstName,lastName,username,email,phone,birthDate,gender')
        .then((res) => res.json()),
  })

  const table = useReactTable({
    data: data?.users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  })

  // if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Card className="bg-sidebar w-full">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage Users Account</CardDescription>
      </CardHeader>
      {isPending ? (
        <CardContent>Loading...</CardContent>
      ) : (
        <>
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
                  <DropdownMenuCheckboxItem
                    checked={showUsernameBar}
                    onCheckedChange={setShowUsernameBar}
                  >
                    Username
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showEmailBar}
                    onCheckedChange={setShowEmailBar}
                  >
                    Email
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DataTable table={table} columns={columns} />
          </CardContent>
          <CardFooter>
            <DataTablePagination table={table} className="w-full" />
          </CardFooter>
        </>
      )}
    </Card>
  )
};
