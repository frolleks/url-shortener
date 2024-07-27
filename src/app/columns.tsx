"use client";

import { DeleteShortenedUrl } from "@/components/delete-shortened-url";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type URL = {
  id: string;
  destinationUrl: string;
};

export const columns: ColumnDef<URL>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "destinationUrl",
    header: "Destination",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const url = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  `${window.location.href}${url.id}`
                )
              }
            >
              Copy shrunk URL
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DeleteShortenedUrl url={url} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
