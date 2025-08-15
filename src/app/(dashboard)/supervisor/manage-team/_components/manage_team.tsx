import LoadingData from "@/components/ui_components/loading/loading_data";
import { DynamicPagination } from "@/components/ui_components/pagination/DynamicPagination";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";

import TeamTable from "@/components/ui_components/table_data/team_table/team_table";
import useDebounce from "@/lib/utils/debounce";
import {
  useGetTeamListQuery,
  useGetTeamStatusListQuery,
} from "@/redux/api/team_api/team_api";
import { useState } from "react";

const ManageTeamSupervisor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetTeamListQuery({
    page,
    limit: 10,
    searchTerm: debouncedSearchTerm,
    status: statusFilter || "",
  });

  const { data: teamStatusList } = useGetTeamStatusListQuery("");
  console.log(teamStatusList, "fff");

  if (isLoading) return <LoadingData />;

  const teams = data?.data || [];
  const meta = data?.meta || { limit: 10, page: 1, totalItem: 1 };
  console.log(meta, "Ggg");
  return (
    <div>
      {/* Search and Filters */}

      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterOne={statusFilter}
        setFilterOne={setStatusFilter}
        placeHolderOne="Filter by Status"
        optionOne={teamStatusList?.data}
      />
      {/* Team Table */}
      <TeamTable teams={teams} isFetching={isFetching} />

      {/* Pagination */}
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

export default ManageTeamSupervisor;
