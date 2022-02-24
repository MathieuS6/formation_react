import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import List from "./List";


export default function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}>
			</Route>
		</Routes>
			
			</>
	);
}




