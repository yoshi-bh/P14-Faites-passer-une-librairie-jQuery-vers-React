import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
	name: "employees",
	initialState: [],
	// user: {
	// 	firstName: "",
	// 	lastName: "",
	// },
	reducers: {
		updateEmployees: (currentState, action) => {
			const employees = [
				...currentState.employees,
				action.payload.employee,
				// firstName: action.payload.firstName,
				// lastName: action.payload.lastName,
			];
			return { ...currentState, employees };
		},
		// logout: (currentState, action) => {
		// 	const user = { ...currentState.user, isConnected: false, token: "" };
		// 	return { ...currentState, user };
		// },
	},
});
