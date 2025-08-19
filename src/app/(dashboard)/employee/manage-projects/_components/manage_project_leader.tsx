/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import LoadingData from "@/components/ui_components/loading/loading_data";

import { DynamicPagination } from "@/components/ui_components/pagination/dynamic_pagination";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";
import ProjectTable from "@/components/ui_components/table_data/project_table/project_table";
import useDebounce from "@/lib/utils/debounce";
import {
  useGetMyTeamProjectsQuery,
  useGetProjectStatusListQuery,
} from "@/redux/api/project_api/project_api";

import { useState } from "react";

const ManageProjectLeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [statusFilter, setStatusFilter] = useState<string | undefined>("");

  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetMyTeamProjectsQuery({
    page,
    limit: 10,
    searchTerm: debouncedSearchTerm,
    projectStatus: statusFilter || "",
  });
  console.dir(
    data?.data.map((dta: any) => dta.projects),
    "KKK"
  );
  const { data: projectStatus } = useGetProjectStatusListQuery("");

  if (isLoading) {
    return <LoadingData></LoadingData>;
  }

  const projectStatusList = projectStatus?.data;
  const projects = data?.data.map((dta: any) => dta.projects) || []; // fallback empty array
  const meta = data?.meta || { limit: 10, page: 1, totalItem: 1 };
  console.log(projectStatus);
  return (
    <div>
      <SearchFilters
        placeHolderOne="Filter by Status"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterOne={statusFilter}
        setFilterOne={setStatusFilter}
        optionOne={projectStatusList}
      />

      <ProjectTable
        isFetching={isFetching}
        isTooltip={true}
        projects={projects}
      />

      <div className="pt-5">
        <DynamicPagination
          page={page}
          limit={meta.limit}
          total={meta.totalItem}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
};

export default ManageProjectLeader;
