import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./components/data-table";
import { columns } from "./components/columns";
import { ColumnFiltersState, SortingState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import DataTablePagination from "./components/data-table-pagination";
import DataTableToolBar from "./components/data-table-toolbar";

export default function UsersPage() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const { isPending, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://dummyjson.com/users?limit=50&select=firstName,lastName,username,email,phone,birthDate,gender')
        .then((res) => res.json()),
  })

  const table = useReactTable({
    data: data?.users,
    columns,
    state: {
      sorting,
      columnFilters
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  // if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Card className="bg-sidebar w-full min-h-full">
      <CardHeader>
        <CardTitle>Manage Users Account</CardTitle>
      </CardHeader>
      {isPending ? (
        <CardContent>Loading...</CardContent>
      ) : (
        <>
          <CardContent>
            <DataTableToolBar table={table} />
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
