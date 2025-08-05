/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  alignRight?: boolean;
}

export interface TableDataProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  showTotal?: {
    accessor: keyof T;
    currencySymbol?: string;
  };
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function TableData<T>({
  data,
  columns,
  showTotal,
  searchTerm,
  setSearchTerm,
}: TableDataProps<T>) {
  const [visibleColumns, setVisibleColumns] = React.useState<(keyof T)[]>(
    columns.map((col) => col.accessor)
  );

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
        return acc;
      }, 0)
    : null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="rounded-md border p-4">
      {/* Dropdown: Toggle Columns */}

      <div className="flex justify-between gap-4 ">
        <div className="relative  w-fit inline-block mb-4">
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
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          className="focus-visible:border-gray-300 focus-visible:ring-0 w-full max-w-96"
        ></Input>
      </div>

      {/* Table */}
      <Table>
        {/* <TableCaption>A list of your recent items.</TableCaption> */}
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
                .map((col) => (
                  <TableCell
                    key={String(col.accessor)}
                    className={col.alignRight ? "text-right" : ""}
                  >
                    {row[col.accessor] !== undefined
                      ? (row[col.accessor] as any)
                      : "-"}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>

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
    </div>
  );
}

export default TableData;
