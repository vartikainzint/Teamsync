import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import orgReducer from "../features/slice/orgSlice";
import createorgReducerSlice from "../features/slice/orgSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    org: orgReducer, // Add other reducers here as needed
    createorg: createorgReducerSlice, // Add other reducers here as needed

  },
});

export default store;