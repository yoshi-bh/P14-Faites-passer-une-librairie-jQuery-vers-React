import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice";
// import { userSlice } from "../pages/Profile/userSlice";
// import { thunk } from "redux-thunk";

let state = {
	employees: {},
};

export const store = configureStore({
	preloadedState: state,
	reducer: combineReducers({
		employees: employeeSlice.reducer,
	}),
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(api.middleware).concat(thunk),
});
