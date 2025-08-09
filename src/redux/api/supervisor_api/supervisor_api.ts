import { baseApi } from "../baseApi";

export const supervisorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: ({ page = 1, limit = 10, searchTerm = "", teamId = "all" }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        if (teamId) {
          params.append("teamId", teamId);
        }

        return `/user/get-employee-list?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetEmployeeQuery } = supervisorApi;
