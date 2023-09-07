import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/onboarding/Login";
import Register from "./pages/onboarding/Register";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
