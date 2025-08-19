"use client";

import { useState, useMemo } from "react";
import LoadingData from "@/components/ui_components/loading/loading_data";
import { DynamicPagination } from "@/components/ui_components/pagination/dynamic_pagination";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";
import EmployeeTable from "@/components/ui_components/table_data/employee_table/employee_table";
import useDebounce from "@/lib/utils/debounce";
import { useGetEmployeeStatusListQuery } from "@/redux/api/employee_api/employee_api";
import { useGetEmployeeQuery } from "@/redux/api/supervisor_api/supervisor_api";
import { useGetTeamListForFilterQuery } from "@/redux/api/team_api/team_api";

const ManageEmployeeSupervisor = () => {
  // Search & filter states
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [statusFilterOne, setStatusFilterOne] = useState<string | undefined>(
    ""
  );
  const [statusFilterTwo, setStatusFilterTwo] = useState<string | undefined>(
    ""
  );

  // Pagination
  const [page, setPage] = useState(1);

  // Fetch data
  const { data, isLoading, isFetching } = useGetEmployeeQuery({
    page,
    limit: 12,
    searchTerm: debouncedSearchTerm,
    teamId: statusFilterOne || "",
    employeeStatus: statusFilterTwo || "",
  });

  const { data: teamListForFilter } = useGetTeamListForFilterQuery("");
  const { data: employeeStatusList } = useGetEmployeeStatusListQuery("");

  // Memoize team options to prevent recalculation on every render
  const teamOptions = useMemo(
    () =>
      teamListForFilter?.data?.map((team: { name: string; _id: string }) => ({
        name: team.name,
        value: team._id,
      })) || [],
    [teamListForFilter]
  );

  const employees = data?.data || [];
  const meta = data?.meta || { limit: 12, page: 1, totalItem: 1 };

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-6">
      {/* Search & Status Filter */}
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterOne={statusFilterOne}
        setFilterOne={setStatusFilterOne}
        optionOne={teamOptions}
        optionTwo={employeeStatusList?.data || []}
        filterTwo={statusFilterTwo}
        setFilterTwo={setStatusFilterTwo}
        placeHolderOne="Filter by Team"
        placeHolderTwo="Filter by Status"
      />

      {/* Employee Table */}
      <EmployeeTable employees={employees} isFetching={isFetching} />

      {/* Pagination */}
      <div className="pt-5">
        <DynamicPagination
          page={page}
          limit={meta.limit}
          total={meta.totalItem}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ManageEmployeeSupervisor;
