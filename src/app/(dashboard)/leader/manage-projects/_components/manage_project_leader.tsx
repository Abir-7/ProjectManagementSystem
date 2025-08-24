/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import LoadingData from "@/components/ui_components/loading/loading_data";

import SearchFilters from "@/components/ui_components/search_filter/search_filter";
import ProjectTable from "@/components/ui_components/table_data/project_table/project_table";
import useDebounce from "@/lib/utils/debounce";
import {
  useGetMyTeamProjectsQuery,
  useGetProjectStatusListQuery,
} from "@/redux/api/project_api/project_api";
import { DynamicPagination } from "@/components/ui_components/Pagination/dynamic_pagination";

const ManageProjectLeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>("");
  const [page, setPage] = useState(1);

  // Debounced search for API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Queries
  const { data, isLoading, isFetching } = useGetMyTeamProjectsQuery({
    page,
    limit: 10,
    searchTerm: debouncedSearchTerm,
    projectStatus: statusFilter || "",
  });

  const { data: projectStatus } = useGetProjectStatusListQuery("");

  // Derived memoized values
  const projectStatusList = useMemo(
    () => projectStatus?.data ?? [],
    [projectStatus]
  ) as any;

  const projects = useMemo(
    () => data?.data?.map((d: any) => d.projects) ?? [],
    [data]
  );

  const meta = useMemo(
    () => data?.meta ?? { limit: 10, page: 1, totalItem: 1 },
    [data]
  );

  if (isLoading) return <LoadingData />;

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

      <ProjectTable isFetching={isFetching} isTooltip projects={projects} />

      {meta.totalItem > 0 && (
        <div className="pt-5">
          <DynamicPagination
            page={page}
            limit={meta.limit}
            total={meta.totalItem}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default ManageProjectLeader;
