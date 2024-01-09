import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
	name: "employees",
	initialState: {},
	reducers: {
		addEmployee: (currentState, action) => {
			console.log(currentState);
			const employees = [...currentState.employees, action.payload.employee];
			return { ...currentState, employees };
		},
		// logout: (currentState, action) => {
		// 	const user = { ...currentState.user, isConnected: false, token: "" };
		// 	return { ...currentState, user };
		// },
	},
});
