import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getMe: builder.query({
      query: () => "/user/me",
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useGetMeQuery } = authApi;
