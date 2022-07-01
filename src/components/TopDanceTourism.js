import "./TopDanceTourism.css";
import {
  Container,
  Grid,
  CssBaseline,
  Typography,
  Box,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "./videoModal";
import { Link } from "react-router-dom";
import "react-modal-video/scss/modal-video.scss";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h5: {
      fontSize: 30,
      fontWeight: 20,
    },
  },
});

let danceTourismData = {
  category: "Dance Tourism",
  data: [
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "W1z4zDlpxRM",
      author: "Nighat Chaodhary",
    },
    {
      id: 2,
      title: "Power of a single decision ",
      image: require("../assets/talk_2.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "xJ5ct84-nmw",
      author: "Nighat Chaodhary",
    },
    {
      id: 3,
      title: "Power of a single decision ",
      image: require("../assets/talk_3.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "zUDXj8REpAI",
      author: "Nighat Chaodhary",
    },
    {
      id: 4,
      title: "Power of a single decision ",
      image: require("../assets/talk_3.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "0-gNHICx8ik",
      author: "Nighat Chaodhary",
    },
  ],
};

const someTitle = "Podcast";

const TopDanceTourism = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>DanceTourism | DancePakistan</title>
      </Helmet>
      <ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
      <Drawer open={drawerOpen} />
      <Box component={"div"} className="DTMain">
        <div className="DTContainer">
          <Box component={"div"}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#624EAA",
                padding: "20px",
                float: "left",
                display: "flex",
              }}
            >
              Dance Tourism
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "right" }}
            >
              <Link to="/SeeAllSubs">See All</Link>
            </Typography>
          </Box>
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/12ogr54VhUM"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/7EP1Yk0rNnA"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/0v4Dzz9PsIg"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/8GbxmGKUQRc"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/fw1QAcnYw2c"
            alt="Live from space album cover"
          />
        </div>
        <div className="DTContainer">
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#624EAA",
                padding: "20px",
                float: "left",
                display: "flex",
              }}
            >
              Tour On Demand
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "right" }}
            >
              <Link to="/SeeAll" state={{ data: danceTourismData }}>
                See All
              </Link>
            </Typography>
          </div>
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/EeT_0AXvZmk"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/EnyzXbZY3-I"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/Zn6yKRSPGhg"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/LISuohQzEeA"
            alt="Live from space album cover"
          />
          <CardMedia
            component="iframe"
            sx={{
              width: "100%",
              height: 300,
              border: "none",
              marginTop: "40px",
            }}
            image="https://www.youtube.com/embed/j99qxx4nCWc"
            alt="Live from space album cover"
          />
        </div>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default TopDanceTourism;
