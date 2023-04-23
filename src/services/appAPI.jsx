import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
 const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    //signup
    signup: builder.mutation({
      query: (user) => ({
        url: "/api/auth/createuser",
        method: "POST",
        body: user,
      }),
    }),
    //login
    login: builder.mutation({
      query: (user) => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    //logout
    logout: builder.mutation({
      query: (user) => ({
        url: "/api/auth/logout",
        method: "DELETE",
        body: user,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } = appApi;

export default appApi;