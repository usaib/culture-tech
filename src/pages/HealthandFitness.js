import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";

import Fade from "react-reveal/Fade";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ResponsiveDrawer from "../components/Drawer";
import { useStyles } from "../styles/healthandfitnessStyles";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import { healthandfitness } from "../styles/healthandfitnessStyles";
import { HealthandFitnessCard } from "../components/HealthandFitnessCard";
export const HealthandFitness = ({ setOpen, setData }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  const classes = useStyles();
  const [active, setActive] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (active == "All") {
      setFilteredData(healthandfitness);
      return;
    }
    const data = healthandfitness.filter((data) => data.category == active);
    console.log(data);
    setFilteredData(data);
  }, [active]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Documentries | DancePakistan </title>
      </Helmet>
      <Box sx={{ display: "flex", overflow: "hidden", padding: 0, margin: 0 }}>
        <ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
        <Drawer open={drawerOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${180}px)` },
            padding: "0",
          }}
        >
          <CssBaseline />
          <Container
            maxWidth="xl"
            sx={{
              minHeight: "550px",
              paddingTop: "100px",
              paddingBottom: "100px",
              position: "relative",
              marginLeft: { sm: "0", xl: "auto" },
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item lg={6} xs={12}>
                <Box component="div" className={classes.centerContent}>
                  <Fade top>
                    <Typography className={classes.headingOne} component="h2">
                      Best Yoga and Meditation for{" "}
                      <span style={{ color: "#D16003" }}>Beginners</span>
                    </Typography>
                    <Typography className={classes.paragraph} component="p">
                      With our professional trainers, we will guide you with the
                      best program to help you get a healthy and ideal body.
                    </Typography>
                  </Fade>
                  <Box
                    component="div"
                    sx={{ display: "flex", alignSelf: "flex-start" }}
                  >
                    <Fade bottom>
                      <Button variant="contained" className={classes.homeBtn}>
                        Explore More
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          color: "rgba(20,24,62,0.93)",
                          fontWeight: 500,
                          padding: "0",
                          backgroundColor: "transparent",
                          "&:hover": { backgroundColor: "transparent" },
                          "&:focus": { backgroundColor: "transparent" },
                        }}
                      >
                        <PlayArrowIcon className={classes.playBtn} />
                        Watch Video
                      </Button>
                    </Fade>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Fade right>
                  <Paper elevation={0} className={classes.heroImage} />
                </Fade>
              </Grid>
            </Grid>
          </Container>
          <Container
            maxWidth="xl"
            sx={{
              minHeight: "550px",
              position: "relative",
              marginBottom: "30px",
              marginLeft: { sm: "0", xl: "auto" },
            }}
          >
            <Fade bottom>
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sx={{ maxWidth: "fit-content !important" }}>
                  <Button
                    className={[
                      classes.filterBtn,
                      active == "All" ? classes.active : "",
                    ]}
                    onClick={() => {
                      setActive("All");
                    }}
                  >
                    All
                  </Button>
                  <Button
                    className={[
                      classes.filterBtn,
                      active == "Yoga" ? classes.active : "",
                    ]}
                    onClick={() => {
                      setActive("Yoga");
                    }}
                  >
                    Yoga
                  </Button>
                  <Button
                    className={[
                      classes.filterBtn,
                      active == "Mind Science (Reiki)" ? classes.active : "",
                    ]}
                    onClick={() => {
                      setActive("Mind Science (Reiki)");
                    }}
                  >
                    Mind Science
                  </Button>
                  <Button
                    className={[
                      classes.filterBtn,
                      active == "Fitness" ? classes.active : "",
                    ]}
                    onClick={() => {
                      setActive("Fitness");
                    }}
                  >
                    Fitness
                  </Button>
                  <Button
                    className={[
                      classes.filterBtn,
                      active == "Nutrition and Diet" ? classes.active : "",
                    ]}
                    onClick={() => {
                      setActive("Nutrition and Diet");
                    }}
                  >
                    Nutrition and Diet
                  </Button>
                </Grid>
              </Grid>
            </Fade>

            {filteredData.map((doc, key) => {
              return (
                <React.Fragment key={key}>
                  <Grid container>
                    <Grid item xs={12} sx={{ marginTop: "30px" }}>
                      <Fade bottom>
                        <Typography
                          className={classes.ctg}
                          sx={{
                            width: "fit-content",
                            position: "relative",
                            fontSize: "1.75rem",
                            "&:after": {
                              content: "''",
                              position: "absolute",
                              bottom: "-5px",
                              left: "0px",
                              backgroundColor: "#D16002",
                              height: "10px",
                              width: "100%",
                              transform: "rotate(-2deg)",
                              clipPath: "polygon(0 18%,90% 0, 100% 100%)",
                            },
                          }}
                        >
                          {doc.subCtg}
                        </Typography>
                      </Fade>
                    </Grid>
                  </Grid>
                  <Grid container>
                    {doc.payload.map((data, key) => {
                      return (
                        <Grid item xs={12} md={4} key={key}>
                          <Fade bottom>
                            <HealthandFitnessCard
                              data={data}
                              key={key}
                              setOpen={setOpen}
                              setData={setData}
                            />
                          </Fade>
                        </Grid>
                      );
                    })}
                  </Grid>
                </React.Fragment>
              );
            })}
          </Container>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
};
