import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	employees: JSON.parse(localStorage.getItem("employees")) || [
		{
			id: 1,
			"first-name": "Tony",
			"last-name": "Stark",
			"date-of-birth": "1999-01-01",
			"start-date": "2024-01-01",
			street: "123 Road of Roads",
			city: "Paris",
			state: "TX",
			"zip-code": "75460",
			department: "Engineering",
		},
		{
			id: 2,
			"first-name": "Steve",
			"last-name": "Rogers",
			"date-of-birth": "1999-12-31",
			"start-date": "2024-12-31",
			street: "123 avenue of Avenue",
			city: "New York",
			state: "NY",
			"zip-code": "75456",
			department: "Sales",
		},
	],
};

export const employeeSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			const currentState = current(state);
			const employees = [...currentState.employees, action.payload];
			localStorage.setItem("employees", JSON.stringify(employees));
			return { ...currentState, employees };
		},
	},
});
