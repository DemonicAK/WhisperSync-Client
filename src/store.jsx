import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appAPI";

//persist our store
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// Create a store with the userSlice reducer and the appApi middleware
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
})

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath]
}
//persist our store
const persistedReducer = persistReducer(persistConfig, reducer)

// Create a store with the userSlice reducer and the appApi middleware
 const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
 })

 export default store; 