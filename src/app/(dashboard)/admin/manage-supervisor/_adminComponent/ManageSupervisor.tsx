"use client";
import LoadingData from "@/components/Loading/LoadingData";
import { DynamicPagination } from "@/components/Pagination/DynamicPagination";
import TableData from "@/components/TableData/TableData";

import { useGetSupervisorQuery } from "@/redux/api/adminApi/adminApi";
import React, { useState } from "react";
const ManageSupervisor = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetSupervisorQuery({
    page,
    limit: 10,
    searchTerm,
  });
  console.log(data?.data);

  if (isLoading) {
    return <LoadingData></LoadingData>;
  }

  const invoices = data?.data;

  const columns: {
    header: string;
    accessor: "name" | "email" | "role" | "status" | "image" | "phone" | "_id";
    alignRight?: boolean;
  }[] = [
    { header: "Image", accessor: "image" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },

    { header: "Mobile", accessor: "phone" },
    { header: "Action", accessor: "_id" }, // We use id here for action
  ];

  console.log(data.meta);
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
          page={data?.meta?.page || 1}
          limit={data?.meta?.limit || 1}
          total={data?.meta?.totalItem || 1} // total from API response
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
};

export default ManageSupervisor;
