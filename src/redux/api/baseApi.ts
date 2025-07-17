/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { getTokenFromCookie } from "@/serverAction/auth.server";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.50.161:4002/api",
    prepareHeaders: async (headers, { getState }) => {
      // const token = (getState() as RootState).auth.user?.token;
      const token = await getTokenFromCookie();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Start empty; endpoints will be injected!
});
