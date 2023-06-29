import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
	return (
		<Router basename="/Diary-Toy">
			<Header />
			<Routes>
				<Route path="/:id" element={<Detail />}></Route>
				<Route path="/write" element={<Write />}></Route>
				<Route path="/" element={<Main />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
