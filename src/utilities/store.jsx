import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice";

/* Variable to store all needed params for the redux store
 * export: the reducer that should be used in the redux store
 */

export const store = configureStore({
	reducer: combineReducers({
		employees: employeeSlice.reducer,
	}),
});
