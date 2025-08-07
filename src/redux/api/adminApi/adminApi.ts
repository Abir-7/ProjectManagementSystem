import { baseApi } from "../baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupervisor: builder.query({
      query: ({ page = 1, limit = 10, searchTerm = "" }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        return `/user/get-supervisor-list?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetSupervisorQuery } = adminApi;
