import { baseApi } from "../baseApi";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeamListForFilter: builder.query({
      query: () => {
        return `/team/team-list-filter`;
      },
    }),
    getTeamList: builder.query({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
        status,
      }: {
        page?: number;
        limit?: number;
        searchTerm?: string;
        status?: string;
      }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (searchTerm) params.append("searchTerm", searchTerm);
        if (status) params.append("status", status);

        return `/team/team-list?${params.toString()}`;
      },
    }),
    getTeamStatusList: builder.query({
      query: () => {
        return `/team/get-status-list-of-team`;
      },
    }),
  }),
});

export const {
  useGetTeamListForFilterQuery,
  useGetTeamListQuery,
  useGetTeamStatusListQuery,
} = teamApi;
