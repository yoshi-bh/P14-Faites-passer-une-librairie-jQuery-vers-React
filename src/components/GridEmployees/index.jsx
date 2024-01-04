import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function GridEmployees() {
	// Row Data: The data to be displayed.
	const [rowData, setRowData] = useState([
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
	]);

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{ field: "first-name" },
		{ field: "last-name" },
		{ field: "date-of-birth" },
		{ field: "start-date" },
		{ field: "street" },
		{ field: "city" },
		{ field: "state" },
		{ field: "zip-code" },
		{ field: "department" },
	]);

	const autoSizeStrategy = {
		type: "fitGridWidth",
		// defaultMinWidth: 100,
		// columnLimits: [
		// 	{
		// 		colId: "street",
		// 		minWidth: 200,
		// 	},
		// ],
	};

	return (
		// Container
		<div className="ag-theme-quartz" style={{ width: 992 }}>
			{/* The AG Grid component */}
			<AgGridReact
				rowData={rowData}
				columnDefs={colDefs}
				autoSizeStrategy={autoSizeStrategy}
				domLayout={"autoHeight"}
				pagination={true}
			/>
		</div>
	);
}

export default GridEmployees;
