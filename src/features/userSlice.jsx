import {createSlice} from '@reduxjs/toolkit'
import appApi from '../services/appAPI'

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addNotifications: (state, {payload}) => {},
        resetNotifications: (state, {payload}) => {},
    },

    extraReducers: (builder) => {
        builder.addMatcher(
          appApi.endpoints.signup.matchFulfilled,
          (state, { payload }) => {
            return payload;
          }
        );
        builder.addMatcher(
          appApi.endpoints.login.matchFulfilled,
          (state, { payload }) => {
            return payload;
          }
        );  
        builder.addMatcher(
          appApi.endpoints.logout.matchFulfilled,
          (state, { payload }) => {
            return null;
          }
        );
    },
})

export const {addNotifications, resetNotifications} = userSlice.actions
export default userSlice.reducer