import { Link } from "react-router-dom";
import GridEmployees from "../../components/GridEmployees";
// import data from "../../data/employees.json";
import "../../styles/EmployeeList.scss";

function EmployeeList() {
	return (
		<div className="employee-list">
			<h1>Current Employees</h1>
			<GridEmployees />
			<Link to="/">Home</Link>
		</div>
	);
}

export default EmployeeList;
