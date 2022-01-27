import React from "react";
import { Homepage } from "./pages/Homepage";
import ResponsiveDrawer from "./components/Drawer";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
