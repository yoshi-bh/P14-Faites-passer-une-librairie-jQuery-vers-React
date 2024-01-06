import { Link } from "react-router-dom";
import InputElement from "../../components/InputElement";
import SelectElement from "../../components/SelectElement";
import options from "./options";
import "../../styles/Home.scss";
// import { useEffect } from "react";

function Home() {
	// useEffect(() => {
	// 	fetch("employees.json")
	// 		.then((response) => {
	// 			console.log(response);
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(evt.target["firstName"].value);
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
		</div>
	);
}

export default Home;
