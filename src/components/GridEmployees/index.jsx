import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
// import { employeeSlice } from "../../utilities/employeeSlice";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../styles/GridEmployees.scss";

function GridEmployees() {
	const employees = useSelector((state) => state.employees.employees);

	// console.log(employees);

	// Column Definitions: Defines & controls grid columns.
	const colDefs = [
		{ field: "first-name" },
		{ field: "last-name" },
		{ field: "date-of-birth" },
		{ field: "start-date" },
		{ field: "street" },
		{ field: "city" },
		{ field: "state" },
		{ field: "zip-code" },
		{ field: "department" },
	];

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

	const [quickFilterText, setQuickFilterText] = useState("");
	const onFilterTextBoxChanged = useCallback(() => {
		setQuickFilterText(document.getElementById("filter-text-box").value);
		// gridRef.current?.api.setGridOption(
		// 	"quickFilterText",
		// 	document.getElementById("filter-text-box").value
		// );
	}, []);

	return (
		// Container
		<div className="ag-theme-alpine" style={{ width: 992, border: "none" }}>
			{/* <h1>{employees?.test ? employees.test : "NO DATA"}</h1> */}
			<div className="search-container">
				<span>Search:</span>
				<input
					type="text"
					id="filter-text-box"
					onInput={onFilterTextBoxChanged}
				/>
			</div>
			{/* The AG Grid component */}
			<AgGridReact
				rowData={employees}
				columnDefs={colDefs}
				autoSizeStrategy={autoSizeStrategy}
				domLayout={"autoHeight"}
				pagination={true}
				quickFilterText={quickFilterText}
			/>
		</div>
	);
}

export default GridEmployees;
