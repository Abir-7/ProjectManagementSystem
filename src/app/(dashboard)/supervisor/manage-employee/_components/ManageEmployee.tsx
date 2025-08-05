"use client";
import { DynamicPagination } from "@/components/Pagination/DynamicPagination";
import TableData from "@/components/TableData/TableData";
import React, { useState } from "react";

const ManageEmployee = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      totalAmount: "$250.00",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      paymentMethod: "PayPal",
      totalAmount: "$150.00",
    },
  ];

  const columns: {
    header: string;
    accessor: "invoice" | "paymentStatus" | "paymentMethod" | "totalAmount";
    alignRight?: boolean;
  }[] = [
    { header: "Invoice", accessor: "invoice" },
    { header: "Status", accessor: "paymentStatus" },
    { header: "Method", accessor: "paymentMethod" },
    { header: "Amount", accessor: "totalAmount", alignRight: true },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  return (
    <div className=" p-4  h-[calc(100vh-109px)]    flex flex-col justify-between">
      <div>
        <TableData
          data={invoices}
          columns={columns}
          showTotal={{ accessor: "totalAmount", currencySymbol: "$" }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        ></TableData>
      </div>

      <div className="mt-5 pb-4">
        <DynamicPagination
          page={page}
          limit={limit}
          total={100} // total from API response
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
};

export default ManageEmployee;
