"use client";

import LoadingData from "@/components/ui_components/loading/loading_data";
import { DynamicPagination } from "@/components/ui_components/pagination/DynamicPagination";
import TableData from "@/components/ui_components/table_data/TableData";
import useDebounce from "@/lib/utils/debounce";
import { useGetEmployeeQuery } from "@/redux/api/supervisor_api/supervisor_api";
import React, { useEffect, useState } from "react";
import { TeamSelect } from "./select_team_filter";
import { toast } from "sonner";
import ActionModalData from "./action_modal_data";

const ManageEmployee = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedTeam, setSelectedTeam] = useState<"all" | "no-team" | string>(
    "all"
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [page, setPage] = useState(1);
  console.log(debouncedSearchTerm);
  const { data, isLoading, isFetching, isError } = useGetEmployeeQuery({
    page,
    limit: 10,
    searchTerm: debouncedSearchTerm,
    teamId: selectedTeam, // Pass selected team here
  });
  console.log(data?.data);

  const invoices = data?.data;

  const columns: {
    header: string;
    accessor:
      | "name"
      | "email"
      | "role"
      | "status"
      | "image"
      | "phone"
      | "_id"
      | "teamId"
      | "teamName";
    alignRight?: boolean;
  }[] = [
    { header: "Image", accessor: "image" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },

    { header: "Mobile", accessor: "phone" },
    { header: "Team", accessor: "teamName" },
    { header: "Action", accessor: "_id" }, // We use id here for action
  ];

  const teams = [
    { id: "1", name: "Engineering" },
    { id: "2", name: "Marketing" },
    { id: "3", name: "Sales" },
  ];

  const handleSelect = (value: "all" | "no-team" | string | null) => {
    console.log("Selected team:", value);
    // If you want to allow clearing selection, you can keep `null` too
    setSelectedTeam(value ?? "all"); // fallback to "all" if null
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something wrong!");
    }
  }, [isError]);

  if (isLoading) {
    return <LoadingData></LoadingData>;
  }

  return (
    <div className=" p-4    flex flex-col justify-between">
      <div>
        <TableData
          isFetching={isFetching}
          data={invoices}
          columns={columns}
          showTotal={{ accessor: "totalAmount", currencySymbol: "$" }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        >
          <TeamSelect
            teams={teams}
            selectedTeam={selectedTeam}
            onSelect={handleSelect}
          ></TeamSelect>
        </TableData>
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

export default ManageEmployee;
