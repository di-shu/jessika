import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => "/test",
    }),
  }),
});

export const { useGetTestQuery } = apiSlice;
