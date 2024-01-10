import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice";

export const store = configureStore({
	reducer: combineReducers({
		employees: employeeSlice.reducer,
	}),
});
