import * as React from "react";
import "./SeeAll.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "./videoModal";
import CardMedia from "@mui/material/CardMedia";
import "react-modal-video/scss/modal-video.scss";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
//import or get some list

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const SeeAll = (props) => {
  const Search = styled("div")(({ theme }) => ({
    borderRadius: "30px",
    backgroundColor: "#C2C3C1",
    "&:hover": {
      backgroundColor: "#FCFCFC ",
      opacity: "0.8",
    },
    position: "absolute",
    top: "80px",
    right: "90px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#000000",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const location = useLocation();
  const { data } = location.state;
  {
    console.log(data);
  }
  return (
    <ThemeProvider theme={theme}>
      <Box className="SeeAll">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white", padding: "20px", float: "left" }}
        >
          {data.category}
          {console.log(data.category)}
        </Typography>
        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        <Grid
          container
          spacing={{ xs: 6, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
          sx={{ textAlign: "center" }}
        >
          {data.data.map((item) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  width: 230,
                  height: 350,
                  display: "inline-block",
                  borderRadius: "15px",
                  backgroundColor: "black",
                }}
              >
                <div>
                  <CardMedia
                    sx={{ width: 230, height: 120, border: "none" }}
                    component="img"
                    image={item.image}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    className="title"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
                    {item.author}
                  </Typography>
                </CardContent>
                <Modal vidId={item.vidId} buttonClass="playzy"></Modal>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SeeAll;
