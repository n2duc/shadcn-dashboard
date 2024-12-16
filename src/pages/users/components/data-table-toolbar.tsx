import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { X, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableToolBarProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
}

export default function DataTableToolBar<TData>({
  table,
  className,
}: DataTableToolBarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className={cn("flex items-center gap-4 mb-4", className)}>
      <div className="flex-1 flex items-center space-x-2">
        <Input
          placeholder="Filter username..."
          className="max-w-sm"
          value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
          onChange={(e) => table.getColumn("username")?.setFilterValue(e.target.value)}
        />
        {isFiltered && (
          <Button
            variant="ghost"
            className="px-2 lg:px-3 leading-none"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto hidden sm:flex">
            <Settings2 />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
