import React from "react";
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
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "../components/Footer";
import { Featured } from "../components/FeaturedVideos";
import { AllDocumentaries } from "../components/AllDocs";
import { featuredVideos, allDocs } from "../styles/virtualStudioStyles";
import { useStyles } from "../styles/documentaryStyles";
import { Helmet } from "react-helmet";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";

export default function Documentry({ setOpen, setCategory, setData }) {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  function sendData(ctg) {
    setCategory(ctg);
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        <title>Virtual Studio | DancePakistan </title>
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
            backgroundColor: "#1b1b1b",
          }}
        >
          <CssBaseline />
          <Container maxWidth="xl" sx={{ padding: "65px 0 0 0 !important" }}>
            <Stack>
              <Grid container>
                {featuredVideos.map((item, key) => (
                  <Grid item xs={12} key={key}>
                    <Featured
                      featurevideo={item}
                      setOpen={setOpen}
                      setData={setData}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
          <Container maxWidth="xl" sx={{ padding: { xl: 0 } }}>
            {allDocs.map((doc, key) => (
              <Stack
                sx={{
                  margin: { xl: "2vw 0", xs: "2vw 1.5vw" },
                  position: "relative",
                  "&:hover": {
                    "& a": {
                      opacity: 1,
                      transform: "translateX(0px)",
                    },
                  },
                }}
                key={key}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3" className={classes.ctg}>
                        {" "}
                        {doc.category}
                      </Typography>
                      <Link
                        className={classes.ctgExp}
                        to={`/documentary/${doc.category}`}
                        onClick={() => {
                          sendData(doc.category);
                        }}
                      >
                        Explore All{" "}
                        <ChevronRightIcon
                          sx={{
                            position: "relative",
                            top: "5.7px",
                            left: "-8px",
                            color: "#fff",
                            fontSize: "1.3rem",
                          }}
                        />{" "}
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  {doc.data[0].payload.map((item, key) => (
                    <Grid
                      item
                      sx={{
                        minWidth: "215px",
                        flexBasis: "0 !important",
                        marginRight: "10px !important",
                      }}
                      key={key}
                    >
                      <AllDocumentaries
                        alldocs={item}
                        setData={setData}
                        setOpen={setOpen}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            ))}
          </Container>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}
