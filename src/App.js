import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Create from './Create';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
								<About />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
