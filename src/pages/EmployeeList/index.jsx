import { Link } from "react-router-dom";
import GridEmployees from "../../components/GridEmployees";
import "../../styles/EmployeeList.scss";

/* React Element to display the page containing all the employees data
 * @params: none
 * returns:
 *    the JSX element of the page to be displayed
 */

function EmployeeList() {
	return (
		<div className="employee-list">
			<h1>Current Employees</h1>
			<GridEmployees />
			<Link to="/" className="home-btn">Home</Link>
		</div>
	);
}

export default EmployeeList;
