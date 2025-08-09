/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ActionModalData from "@/app/(dashboard)/supervisor/manage-employee/_components/action_modal_data";

type Column<T> = {
  header: string;
  accessor: keyof T;
  alignRight?: boolean;
};

type TableDataProps<T> = {
  data: T[];
  columns: Column<T>[];
  showTotal?: {
    accessor: keyof T;
    currencySymbol?: string;
  };
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isFetching: boolean;
  children?: React.ReactNode;
  extraControl?: React.ReactNode;
};

export default function TableData<T>({
  data,
  columns,
  showTotal,
  searchTerm,
  setSearchTerm,
  isFetching,
  children,
}: TableDataProps<T>) {
  const [visibleColumns, setVisibleColumns] = React.useState<(keyof T)[]>(
    columns.map((col) => col.accessor)
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const toggleColumn = (accessor: keyof T) => {
    setVisibleColumns((prev) =>
      prev.includes(accessor)
        ? prev.filter((col) => col !== accessor)
        : [...prev, accessor]
    );
  };

  const total = showTotal
    ? data?.reduce((acc, item) => {
        const raw = item[showTotal.accessor];
        if (typeof raw === "string") {
          const parsed = parseFloat(raw.replace(/[$,]/g, ""));
          return acc + (isNaN(parsed) ? 0 : parsed);
        }
        if (typeof raw === "number") {
          return acc + raw;
        }
        return acc;
      }, 0)
    : null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (userId: any, teamId: any) => {
    if (userId) {
      setSelectedUserId(String(userId));
      setModalOpen(true);
      if (teamId) {
        setSelectedTeamId(teamId);
      }
    }
  };

  return (
    <div className="rounded-md border border-border p-4 bg-background text-foreground">
      {/* Controls */}
      <div className="flex justify-between gap-4 mb-4">
        {/* ShadCN DropdownMenu for Columns */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {columns.map((col) => (
              <DropdownMenuCheckboxItem
                key={String(col.accessor)}
                checked={visibleColumns.includes(col.accessor)}
                onCheckedChange={() => toggleColumn(col.accessor)}
              >
                {col.header}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Input */}
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          className="focus-visible:ring-1 focus-visible:ring-ring w-full max-w-96"
        />
        {/* Optional children rendering */}
        {children && <div className="">{children}</div>}
      </div>

      {/* Table */}

      {isFetching ? (
        <div className="flex items-center justify-center  py-10 bg-background">
          <div className="flex flex-col items-center gap-2 text-foreground">
            <svg
              className="animate-spin h-6 w-6 text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="text-sm font-medium text-foreground">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              {columns
                .filter((col) => visibleColumns.includes(col.accessor))
                .map((col) => (
                  <TableHead
                    key={String(col.accessor)}
                    className={col.alignRight ? "text-right" : ""}
                  >
                    {col.header}
                  </TableHead>
                ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns
                  .filter((col) => visibleColumns.includes(col.accessor))
                  .map((col) => {
                    const value = row[col.accessor];
                    if (col.header === "Action") {
                      const userId =
                        (row as any)["_id"] ?? (row as any)["id"] ?? null;
                      const teamId = (row as any)["teamId"] ?? null;
                      return (
                        <TableCell
                          key={String(col.accessor)}
                          className={col.alignRight ? "text-right" : ""}
                        >
                          <button
                            className="bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/90 transition"
                            onClick={() => openModal(userId, teamId)}
                          >
                            View
                          </button>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={String(col.accessor)}
                        className={col.alignRight ? "text-right" : ""}
                      >
                        {col.accessor === "image" ? (
                          typeof value === "string" && value.trim() !== "" ? (
                            <Image
                              src={value}
                              alt="Image"
                              width={50}
                              height={50}
                              className="rounded-full w-8 h-8 object-cover"
                            />
                          ) : (
                            "N/A"
                          )
                        ) : value !== undefined && value !== "" ? (
                          (value as any)
                        ) : (
                          "N/A"
                        )}
                      </TableCell>
                    );
                  })}
              </TableRow>
            ))}
          </TableBody>

          {/* Footer Total */}
          {showTotal && visibleColumns.includes(showTotal.accessor) && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={columns.length - 1}>Total</TableCell>
                <TableCell className="text-right">
                  {showTotal.currencySymbol || "$"}
                  {total?.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      )}

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md w-full max-h-[90vh] overflow-auto bg-background text-foreground">
          <DialogHeader>
            <DialogTitle>User ID</DialogTitle>
            <DialogDescription>
              Here is the selected user ID detail.
            </DialogDescription>
          </DialogHeader>

          <ActionModalData
            teamId={selectedTeamId}
            userId={selectedUserId}
          ></ActionModalData>
        </DialogContent>
      </Dialog>
    </div>
  );
}
