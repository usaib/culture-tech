import React from "react";
import { Homepage } from "./pages/Homepage";
import Podcasts from "./pages/Podcasts";
import Documentry from "./pages/Documentry";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="app/podcasts" element={<Podcasts />} />
					<Route path="documentries" element={<Documentry />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
