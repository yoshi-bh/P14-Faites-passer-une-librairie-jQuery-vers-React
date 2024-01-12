import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../utilities/store";
import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";

/* React App Element to manage routing and redux store
 * @params: none
 * returns:
 *    the JSX element to be displayed containing the entire app
 */

function App() {
	return (
		<Provider store={store}>
			<Router>
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
