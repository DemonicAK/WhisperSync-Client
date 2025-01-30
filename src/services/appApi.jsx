import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// console.log(BACKEND_URL);
// Define a service using a base URL and expected endpoints


// define a service user a base URL

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),

  endpoints: (builder) => ({
    // creating the user
    signupUser: builder.mutation({
      query: (user) => ({
        url: "/users/create",
        method: "POST",
        body: user,
        // headers: {
        //   CORS: "no-cors",
        // },
      }),
    }),

    // login
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
        // headers: {
        //   CORS: "no-cors",
        // },
      }),
    }),

    // logout

    logoutUser: builder.mutation({
      query: (payload) => ({
        url: "/logout",
        method: "DELETE",
        body: payload,
        // headers: {
        //   CORS: "no-cors",
        // },
      }),
    }),
  }),
});

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;
