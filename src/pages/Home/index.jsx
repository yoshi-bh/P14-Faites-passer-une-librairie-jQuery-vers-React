import { Link } from "react-router-dom";
import InputElement from "../../components/InputElement";
import SelectElement from "../../components/SelectElement";
import options from "./options";
import "../../styles/Home.scss";

function Home() {
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
					<InputElement id="firstName" label="First Name" />
					<InputElement id="lastName" label="Last Name" />
					<InputElement id="birthDate" label="Date of Birth" />
					<InputElement id="startDate" label="Start Date" />
					<fieldset className="address">
						<legend>Address</legend>
						<InputElement id="street" label="Street" />
						<InputElement id="city" label="City" />
						<SelectElement id="state" label="State" options={options.states} />
						<InputElement id="zip" label="Zip Code" />
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
