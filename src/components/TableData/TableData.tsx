/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
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
};

export default function TableData<T>({
  data,
  columns,
  showTotal,
  searchTerm,
  setSearchTerm,
}: TableDataProps<T>) {
  const [visibleColumns, setVisibleColumns] = React.useState<(keyof T)[]>(
    columns.map((col) => col.accessor)
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const toggleColumn = (accessor: keyof T) => {
    setVisibleColumns((prev) =>
      prev.includes(accessor)
        ? prev.filter((col) => col !== accessor)
        : [...prev, accessor]
    );
  };

  const total = showTotal
    ? data.reduce((acc, item) => {
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

  const openModal = (userId: any) => {
    if (userId) {
      setSelectedUserId(String(userId));
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedUserId(null);
    setModalOpen(false);
  };

  // Close modal on ESC key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  return (
    <div className="rounded-md border p-4">
      {/* Controls */}
      <div className="flex justify-between gap-4">
        {/* Column Toggle */}
        <div className="relative w-fit inline-block mb-4">
          <details className="dropdown w-28">
            <summary className="cursor-pointer border px-3 py-[5px] rounded">
              Columns
            </summary>
            <div className="absolute z-10 mt-1 bg-white border shadow rounded p-2 w-48">
              {columns.map((col) => (
                <label
                  key={String(col.accessor)}
                  className="flex items-center space-x-2 py-1"
                >
                  <input
                    className="accent-blue-950"
                    type="checkbox"
                    checked={visibleColumns.includes(col.accessor)}
                    onChange={() => toggleColumn(col.accessor)}
                  />
                  <span>{col.header}</span>
                </label>
              ))}
            </div>
          </details>
        </div>

        {/* Search Input */}
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          className="focus-visible:border-gray-300 focus-visible:ring-0 w-full max-w-96"
        />
      </div>

      {/* Table */}
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
                    return (
                      <TableCell
                        key={String(col.accessor)}
                        className={col.alignRight ? "text-right" : ""}
                      >
                        <button
                          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
                          onClick={() => openModal(userId)}
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

      {/* Custom shadcn-like modal */}
      {modalOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 transition-opacity"
          ></div>

          {/* Modal box */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-auto p-6 animate-fadeIn">
              <header className="mb-4">
                <h2 className="text-lg font-semibold">User ID</h2>
              </header>
              <main>
                <p className="break-words">{selectedUserId}</p>
              </main>
              <footer className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out forwards;
            }
          `}</style>
        </>
      )}
    </div>
  );
}
