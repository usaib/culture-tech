import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import Documentary from "./screens/documentry"
import {Homepage} from "./screens/Homepage"
import Podcast from "./screens/podcast"
import { theme } from "./theme/theme";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route exact path="/documentaries" element={<Documentary />} />
          <Route path="/podcasts" element={<Podcast />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
