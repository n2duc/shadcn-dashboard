import { ColumnDef } from "@tanstack/react-table"
import DataTableColumnHeader from "./column-header"
import DataTableRowActions from "./data-table-row-actions"
import { Badge } from "@/components/ui/badge";

export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row }) => (
      <span className="pl-4">{row.getValue("username")}</span>
    )
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => (
      <span className="pl-4">{row.getValue("firstName")}</span>
    )
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => (
      <span className="pl-4">{row.getValue("lastName")}</span>
    )
  },
  {
    accessorKey: "phone",
    header: "PhoneNumber"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => <Badge variant={`${row.getValue("gender") === "male" ? "secondary" : "default"}`}>{row.getValue("gender")}</Badge>
  },
  {
    accessorKey: "birthDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Birth Date" />
    ),
    cell: ({ row }) => (
      <span className="pl-4">{row.getValue("birthDate")}</span>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }
]