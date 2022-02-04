import React from "react";
import { Homepage } from "./pages/Homepage";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Homepage />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
