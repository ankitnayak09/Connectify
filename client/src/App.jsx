import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<Auth />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Navigate to="/auth" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;