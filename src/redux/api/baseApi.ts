/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { getAuthDataFromCookie } from "@/serverAction/auth.server";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://10.10.12.62:4002/api",
    baseUrl: "http://192.168.50.161:4002/api",
    prepareHeaders: async (headers, { getState }) => {
      // const token = (getState() as RootState).auth.user?.token;
      const auth = await getAuthDataFromCookie();

      if (auth?.token) {
        headers.set("Authorization", `Bearer ${auth?.token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Start empty; endpoints will be injected!
});
