import { baseApi } from "../baseApi";

export const supervisorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeStatusList: builder.query({
      query: () => {
        return `/user/employee-status-list`;
      },
    }),
  }),
});

export const { useGetEmployeeStatusListQuery } = supervisorApi;
