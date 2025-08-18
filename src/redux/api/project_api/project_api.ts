import { baseApi } from "../baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
        teamId = "ALL",
        projectStatus = "",
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

        if (projectStatus) {
          params.append("projectStatus", projectStatus);
        }

        return `/project/get-all?${params.toString()}`;
      },
    }),
    getPhaseDetails: builder.query({
      query: (phaseId: string) => {
        return `/project/get-phase-details/${phaseId.toString()}`;
      },
    }),
    getProjectStatusList: builder.query({
      query: () => {
        return `/project/get-project-status-list`;
      },
    }),
    getMyTeamProjects: builder.query({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
        projectStatus = "",
      }) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        if (projectStatus) {
          params.append("projectStatus", projectStatus);
        }

        return `/project/get-my-team-projects?${params.toString()}`;
      },
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetPhaseDetailsQuery,
  useGetProjectStatusListQuery,
  useGetMyTeamProjectsQuery,
} = projectApi;
