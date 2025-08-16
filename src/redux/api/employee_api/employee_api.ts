import { baseApi } from "../baseApi";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeStatusList: builder.query({
      query: () => {
        return `/user/employee-status-list`;
      },
    }),
  }),
});

export const { useGetEmployeeStatusListQuery } = employeeApi;
