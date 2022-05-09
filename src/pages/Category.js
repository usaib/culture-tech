import React from "react";

import {
  Container,
  Grid,
  CssBaseline,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useStyles } from "../styles/documentaryStyles";

import { Featured } from "../components/FeaturedVideos";
import { AllDocumentaries } from "../components/AllDocs";
import { allDocs } from "../styles/documentaryStyles";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
export const Category = ({ ctg, setData, setOpen }) => {
  const documents = allDocs.filter(({ data, category }) => {
    return category === ctg;
  });

  const featuredVideo = documents[0].data[0].payload[0];
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
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
            backgroundColor: "#1b1b1b",
          }}
        >
          <CssBaseline />
          <Container maxWidth="xl" sx={{ padding: "65px 0 0 0 !important" }}>
            <Stack>
              <Grid container>
                <Grid item xs={12}>
                  <Featured
                    featurevideo={featuredVideo}
                    setOpen={setOpen}
                    setData={setData}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Container>
          <Container maxWidth="xl" sx={{ padding: { xl: 0 } }}>
            {documents[0].data.map((doc, key) => (
              <Stack
                sx={{
                  margin: { xl: "2vw 0", xs: "2vw 1.5vw" },
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
                        {doc.subCtg}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Grid
                  container
                  sx={{
                    transition: "all 0.5s ease-in-out",
                  }}
                  className="container"
                >
                  {doc.payload.map((item, key) => (
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
};
