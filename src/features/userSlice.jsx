import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appAPI";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
  },
  // Add reducers for additional action types here, and handle loading state as needed
  extraReducers: (builder) => {
    //save the user in the state after signup
    builder.addMatcher(
      appApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    //save the user in the state after login
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    //remove the user from the state after logout
    builder.addMatcher(appApi.endpoints.logout.matchFulfilled, () => {
      return null;
    });
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
