import "./LiveSession.css";
import "./VirtualStudio.css";
import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  h5: {
    fontSize: 30,
    fontWeight: 20,
  },
});

const weddingDances = [
  { vidId: "https://www.youtube.com/embed/a-y-BKLBy2g" },
  { vidId: "https://www.youtube.com/embed/y8VmIV_BCS8" },
  { vidId: "https://www.youtube.com/embed/cN1vniebhzM" },
];

const danceStudio = [
  { vidId: "https://www.youtube.com/embed/W1z4zDlpxRM" },
  { vidId: "https://www.youtube.com/embed/xJ5ct84-nmw" },
  { vidId: "https://www.youtube.com/embed/zUDXj8REpAI" },
  { vidId: "https://www.youtube.com/embed/0-gNHICx8ik" },
];

let danceStudioData = {
  category: "Dance Studio",
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

let virtualStudioData = {
  category: "Virtual Studio",
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

const VirtualStudio = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>VirtualStudio | DancePakistan</title>
      </Helmet>
      <ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
      <Drawer open={drawerOpen} />
      <div className="VirtualStudioMain">
        <div className="VirtualStudioContainer">
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#46a2a6",
                padding: "20px",
                float: "left",
                display: "flex",
              }}
            >
              Wedding Dances
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "right" }}
            >
              <Link to="/SeeAll" state={{ data: virtualStudioData }}>
                SeeMore
              </Link>
            </Typography>
          </div>
          {weddingDances.map((item) => (
            <CardMedia
              component="iframe"
              sx={{
                width: "100%",
                height: 400,
                border: "none",
                marginTop: "40px",
              }}
              image={item.vidId}
              alt="Live from space album cover"
            />
          ))}
        </div>
        <div className="VirtualStudioContainer">
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#46a2a6",
                padding: "20px",
                float: "left",
                display: "flex",
              }}
            >
              Dance Studio
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "right" }}
            >
              <Link to="/SeeAll" state={{ data: danceStudioData }}>
                SeeMore
              </Link>
            </Typography>
          </div>
          {danceStudio.map((item) => (
            <CardMedia
              component="iframe"
              sx={{
                width: "100%",
                height: 400,
                border: "none",
                marginTop: "40px",
              }}
              image={item.vidId}
              alt="Live from space album cover"
            />
          ))}
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default VirtualStudio;
