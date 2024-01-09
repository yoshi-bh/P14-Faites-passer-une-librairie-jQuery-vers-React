import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice";

let state = {
	employees: [
		{
			id: 1,
			"first-name": "Tony",
			"last-name": "Stark",
			"date-of-birth": "01/01/1999",
			"start-date": "01/01/2024",
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
			"date-of-birth": "12/31/1999",
			"start-date": "12/31/2024",
			street: "123 avenue of Avenue",
			city: "New York",
			state: "NY",
			"zip-code": "75456",
			department: "Sales",
		},
	],
};

export const store = configureStore({
	preloadedState: state,
	reducer: combineReducers({
		employees: employeeSlice.reducer,
	}),
});
