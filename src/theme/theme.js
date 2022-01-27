import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(20,24,62,0.93)",
      mutedText: "#5E6282",
      textColor: "#1e1d4c",
    },
    secondary: { main: "#F3A611", dark: "#D16002 !important" },
  },
  typography: {
    fontFamily: "Poppins,sans-serif !important",
    fontWeightBold: "700 !important",
    fontWeightRegular: "300 !important",
    fontWeightMedium: "500 !important",
    text_lg: "1.85em !important",
    text_md: "1.2em !important",
    text_xl: "2.5em !important",
    text_sm: "0.85em !important",
  },
});
