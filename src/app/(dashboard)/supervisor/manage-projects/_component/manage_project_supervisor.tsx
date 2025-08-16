/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingData from "@/components/ui_components/loading/loading_data";
import { DynamicPagination } from "@/components/ui_components/pagination/DynamicPagination";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";
import ProjectTable from "@/components/ui_components/table_data/project_table/project_table";
import useDebounce from "@/lib/utils/debounce";
import {
  useGetAllProjectsQuery,
  useGetProjectStatusListQuery,
} from "@/redux/api/project_api/project_api";
import { useGetTeamListForFilterQuery } from "@/redux/api/team_api/team_api";

import { useState } from "react";

const ManageProjectSupervisor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [statusFilter, setStatusFilter] = useState<string | undefined>("");
  const [teamFilter, setTeamFilter] = useState<string | undefined>("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetAllProjectsQuery({
    page,
    limit: 10,
    searchTerm: debouncedSearchTerm,
    teamId: teamFilter || "",
    projectStatus: statusFilter || "",
  });

  const { data: projectStatus } = useGetProjectStatusListQuery("");
  const { data: teamListForFilter } = useGetTeamListForFilterQuery("");
  console.log(teamListForFilter);

  if (isLoading) {
    return <LoadingData></LoadingData>;
  }
  const teamOptions = teamListForFilter?.data.map(
    (team: { name: string; _id: string }) => {
      return { name: team.name, value: team._id };
    }
  );

  const projectStatusList = projectStatus?.data;
  const projects = data?.data || []; // fallback empty array
  const meta = data?.meta || { limit: 10, page: 1, totalItem: 1 };
  console.log(projectStatus);
  return (
    <div>
      <SearchFilters
        placeHolderOne="Filter by Status"
        placeHolderTwo="Filter by Team"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterOne={statusFilter}
        setFilterOne={setStatusFilter}
        filterTwo={teamFilter}
        setFilterTwo={setTeamFilter}
        optionTwo={teamOptions}
        optionOne={projectStatusList}
      />

      {isFetching ? (
        <LoadingData></LoadingData>
      ) : (
        <ProjectTable isTooltip={true} projects={projects} />
      )}

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

export default ManageProjectSupervisor;
