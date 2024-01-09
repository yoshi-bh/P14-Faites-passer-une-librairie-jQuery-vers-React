import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
// import { ExampleComponent } from "spin-loader-openclassroom-yoshi";
// import { Button, Card } from "@yoshi-bh/my-library";

import { Provider } from "react-redux";
import { store } from "../utilities/store";
import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";

// import logo from "./icon-security.png";

function App() {
	return (
		<Provider store={store}>
			<Router>
				{/* <ExampleComponent text="Just some filler text to test things out!" /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employees" element={<EmployeeList />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
