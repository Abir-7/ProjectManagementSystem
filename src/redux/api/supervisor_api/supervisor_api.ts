import { baseApi } from "../baseApi";

export const supervisorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
        teamId = "ALL",
        employeeStatus = "ALL",
      }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        if (teamId && teamId !== "ALL") {
          params.append("teamId", teamId);
        }

        if (employeeStatus && employeeStatus !== "ALL") {
          params.append("employeeStatus", employeeStatus);
        }

        return `/user/get-employee-list?${params.toString()}`;
      },
    }),
    updateUserRoleStatus: builder.mutation({
      query: ({
        userId,
        role,
        status,
      }: {
        userId: string;
        role?: string;
        status?: string;
      }) => ({
        url: `/user/update-status-role`,
        method: "PATCH",
        body: { userId, role, status },
      }),
    }),
  }),
});

export const { useGetEmployeeQuery, useUpdateUserRoleStatusMutation } =
  supervisorApi;
