import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/write" element={<Write />}></Route>
				<Route path="/" element={<Main />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
