/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import TableLoading from "../../loading/table_loading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditModal from "./edit_modal";

const EmployeeTable = ({
  employees,
  isFetching,
}: {
  employees: any[];
  isFetching: boolean;
}) => {
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  if (isFetching) {
    return <TableLoading />;
  }

  return (
    <div className="p-2">
      <div className="overflow-x-auto border border-border rounded-lg max-h-[calc(100vh-270px)] custom-scroll">
        <table className="w-full min-w-full divide-y divide-border">
          {/* Table Head */}
          <thead className="sticky bg-accent top-0 z-2">
            <tr>
              {[
                "Image",
                "Name",
                "Email",
                "Mobile",
                "Status",
                "Role",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left text-sm font-medium text-foreground/80"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-border">
            {employees.map((emp) => (
              <tr key={emp._id}>
                {/* Image */}
                <td className="px-4 py-2">
                  {emp.image ? (
                    <Image
                      height={50}
                      width={50}
                      src={emp.image}
                      alt={emp.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                      N/A
                    </div>
                  )}
                </td>

                {/* Name */}
                <td className="px-4 py-2">{emp.name}</td>

                {/* Email */}
                <td className="px-4 py-2">{emp.email}</td>

                {/* Mobile */}
                <td className="px-4 py-2">{emp.phone || "—"}</td>

                {/* Status */}
                <td className="px-4 py-2">{emp.status}</td>

                {/* Role */}
                <td className="px-4 py-2">{emp.role}</td>

                {/* Action */}
                <td className="px-4 py-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedUser(emp._id)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent aria-describedby={undefined}>
                      <DialogHeader>
                        <DialogTitle>Edit User</DialogTitle>
                      </DialogHeader>
                      <EditModal
                        userStatus={emp.status}
                        userRole={emp.role}
                        userId={selectedUser}
                      ></EditModal>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
