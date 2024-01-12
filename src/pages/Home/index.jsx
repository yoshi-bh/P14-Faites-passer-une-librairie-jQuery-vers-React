import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SimpleModal } from "oc-yoshi-modal-lib";
import "oc-yoshi-modal-lib/dist/index.css";
import InputElement from "../../components/InputElement";
import SelectElement from "../../components/SelectElement";
import { employeeSlice } from "../../utilities/employeeSlice";
import options from "./options";
import "../../styles/Home.scss";

/* React Element to display the home page
 * @params: none
 * returns:
 *    the JSX element of the page to be displayed
 */

function Home() {
	const dispatch = useDispatch();

	const employees = useSelector((state) => state.employees);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const newEmployee = {
			id: employees.length,
			"first-name": evt.target["first-name"].value,
			"last-name": evt.target["last-name"].value,
			"date-of-birth": evt.target["date-of-birth"].value,
			"start-date": evt.target["start-date"].value,
			street: evt.target["street"].value,
			city: evt.target["city"].value,
			state: evt.target["state"].value,
			"zip-code": evt.target["zip-code"].value,
			department: evt.target["department"].value,
		};
		dispatch(employeeSlice.actions.addEmployee(newEmployee));
		setModalIsOpen(true);
	};

	return (
		<div className="home">
			<header>
				<h1>HRnet</h1>
			</header>
			<section>
				<Link to="/employees">View Current Employees</Link>
				<h2>Create Employee</h2>
				<form action="POST" onSubmit={handleSubmit}>
					<InputElement id="first-name" label="First Name" type="text" />
					<InputElement id="last-name" label="Last Name" type="text" />
					<InputElement id="date-of-birth" label="Date of Birth" type="date" />
					<InputElement id="start-date" label="Start Date" type="date" />
					<fieldset className="address">
						<legend>Address</legend>
						<InputElement id="street" label="Street" type="text" />
						<InputElement id="city" label="City" type="text" />
						<SelectElement id="state" label="State" options={options.states} />
						<InputElement id="zip-code" label="Zip Code" type="number" />
					</fieldset>
					<SelectElement
						id="department"
						label="Departement"
						options={options.departments}
					/>
					<button>Save</button>
				</form>
			</section>
			{modalIsOpen ? (
				<SimpleModal
					onClickHandler={() => setModalIsOpen(false)}
					text="Employee Created!"
				/>
			) : null}
		</div>
	);
}

export default Home;
