import React, { useState } from "react";
import "./SeeAllSubs.css";
import "./TopDanceTourism.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
// import TabContext from "@material-ui/lab/TabContext";
// import TabList from "@material-ui/lab/TabList";
// import TabPanel from "@material-ui/lab/TabPanel";
import { TabPanel } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabContext } from "@mui/lab";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import add from "../Images/Vector.png";
import img1 from "../Images/int_1.jpg";
import img2 from "../Images/int_2.jpg";
import img3 from "../Images/int_3.jpg";
import img4 from "../Images/int_4.jpg";
import img5 from "../Images/int_5.jpg";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "./videoModal";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFFFFF ",
    },
  },
  typography: {
    fontFamily: "Poppins",
    body1: {
      fontSize: 14,
    },
    h4: {
      fontSize: 40,
      fontWeight: 70,
    },
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Search = styled("div")(({ theme }) => ({
  borderRadius: "30px",
  backgroundColor: "#C2C3C1",
  "&:hover": {
    backgroundColor: "#FCFCFC ",
    opacity: "0.8",
  },
  position: "absolute",
  top: "60px",
  right: "60px",
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

const NationalList = [
  { image: img1, vidId: "TSqTzwW9uf4" },
  { image: img4, vidId: "topqYmXm30M" },
  { image: img2, vidId: "g0q2Jn2gcFc" },
  { image: img3, vidId: "DHnHpHkwqs4" },
  { image: img5, vidId: "3HIAO2Fs9i8" },
  { image: img4, vidId: "CgSQe64SP6c" },
];

const RegionalList = [
  { image: img1, vidId: "GteI3IsT6R0" },
  { image: img1, vidId: "h035UUVK9Pc" },
  { image: img1, vidId: "4fW7OitGawQ" },
  { image: img1, vidId: "sczfhSP017Q" },
  { image: img1, vidId: "29xBldjRRE8" },
  { image: img1, vidId: "tv8M28cNOUw" },
  { image: img1, vidId: "8MFSs9wCJN4" },
  { image: img1, vidId: "BTwXFuW-4Rc" },
];

const MountainousList = [
  { image: img1, vidId: "9uheTLX6oho" },
  { image: img1, vidId: "MYDsjJivU8s" },
  { image: img1, vidId: "8lhisnQOau0" },
  { image: img1, vidId: "XZ1NcwErw2s" },
  { image: img1, vidId: "H49HtIkqQZo" },
  { image: img1, vidId: "sAYt-1bhpMM" },
];

const TribalDancesList = [
  { image: img1, vidId: "7IqHU9G3oRU" },
  { image: img1, vidId: "bjom5gUTI6I" },
  { image: img1, vidId: "s94ChMhxYeo" },
  { image: img1, vidId: "owMUCzst7I0" },
  { image: img1, vidId: "TyQEOMTdOVo" },
  { image: img1, vidId: "OF1AFWukidw" },
  { image: img1, vidId: "NFEubz38B9I" },
  { image: img1, vidId: "RGGmW5CQmdw" },
];

const punjabReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];
const sindhReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];
const kpkReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];
const balochistanReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];
const kashmirReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];
const gilgitReg = [
  { title: "Power of a single decision ", image: img1, vidId: "GteI3IsT6R0" },
  { title: "Power of a single decision ", image: img1, vidId: "h035UUVK9Pc" },
  { title: "Power of a single decision ", image: img1, vidId: "4fW7OitGawQ" },
  { title: "Power of a single decision ", image: img1, vidId: "sczfhSP017Q" },
  { title: "Power of a single decision ", image: img1, vidId: "29xBldjRRE8" },
  { title: "Power of a single decision ", image: img1, vidId: "tv8M28cNOUw" },
  { title: "Power of a single decision ", image: img1, vidId: "8MFSs9wCJN4" },
  { title: "Power of a single decision ", image: img1, vidId: "BTwXFuW-4Rc" },
];

export default function ColorTabs() {
  const [value, setValue] = React.useState("national");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState("none");

  const handlerChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <div className="SeeAllSubsMain">
            <Typography
              variant="h4"
              sx={{ color: "white", padding: "20px", textAlign: "left" }}
            >
              Dance Tourism
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
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="primary"
            >
              <Tab
                sx={{ color: "#8A8988", padding: "50px" }}
                label="National"
                value="national"
              />
              <Tab
                sx={{ color: "#8A8988", padding: "50px" }}
                label="Regional"
                value="regional"
              />
              <Tab
                sx={{ color: "#8A8988", padding: "50px" }}
                label="Mountainous"
                value="mountainous"
              />
              <Tab
                sx={{ color: "#8A8988", padding: "50px" }}
                label="Tribal Dances"
                value="tribal"
              />
            </Tabs>
            <TabPanel value="national" className="SeeAllSubsContainer">
              {NationalList.map((item) => (
                <Card class="resCard">
                  <Box sx={{ width: 500, height: 220 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 400, height: 220, border: "none" }}
                      src={item.image}
                      alt="Live from space album cover"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                      className="ContListenTitle"
                    >
                      Leading from a Distance with Farooq Chaudhry OBE |
                      Questions Dancing through my Mind
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      variant="body2"
                      align="left"
                      className="title"
                    >
                      Clore Leadership presents the second in a new series
                      'Leading from a Distance'. We are asking cultural leaders,
                      facilitators and trainers who contribute to our programmes
                      to share with the sector at large ideas, tips, tools and
                      strategies for leading effectively amidst current
                      uncertainties.
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="left"
                      className="author"
                    >
                      Youtube
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      marginLeft: "auto",
                      paddingRight: "20px",
                      order: 1,
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <Modal
                      vidId={item.vidId}
                      buttonClass="playssButton"
                    ></Modal>
                    <button className="addPlaylist">
                      <img src={add} alt="add to playlist"></img>
                    </button>
                  </Box>
                </Card>
              ))}
            </TabPanel>
            <TabPanel value="regional" className="SeeAllSubsContainer">
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handlerChange("panel1")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    sx={{ backgroundColor: "#2B2F5C " }}
                  >
                    <Typography sx={{ color: "white" }}>PUNJAB</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {punjabReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handlerChange("panel2")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                    sx={{ backgroundColor: "#2B2F5C" }}
                  >
                    <Typography sx={{ color: "white" }}>SINDH</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {sindhReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handlerChange("panel3")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    sx={{ backgroundColor: "#2B2F5C" }}
                  >
                    <Typography sx={{ color: "white" }}>KPK</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {kpkReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handlerChange("panel4")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    sx={{ backgroundColor: "#2B2F5C" }}
                  >
                    <Typography sx={{ color: "white" }}>KASHMIR</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {kashmirReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handlerChange("panel5")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    sx={{ backgroundColor: "#2B2F5C" }}
                  >
                    <Typography sx={{ color: "white" }}>
                      GILGIT BALTISTAN
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {gilgitReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handlerChange("panel6")}
                  sx={{ backgroundColor: "#1B1E23" }}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    sx={{ backgroundColor: "#2B2F5C" }}
                  >
                    <Typography sx={{ color: "white" }}>BALOCHISTAN</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      spacing={{ xs: 6, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                      sx={{ textAlign: "center" }}
                    >
                      {balochistanReg.map((item) => (
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
                            <Modal
                              vidId={item.vidId}
                              buttonClass="playzy"
                            ></Modal>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </div>
            </TabPanel>
            <TabPanel value="mountainous" className="SeeAllSubsContainer">
              {MountainousList.map((item) => (
                <Card class="resCard">
                  <Box sx={{ width: 500, height: 220 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 400, height: 220, border: "none" }}
                      src={item.image}
                      alt="Live from space album cover"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                      className="ContListenTitle"
                    >
                      Leading from a Distance with Farooq Chaudhry OBE |
                      Questions Dancing through my Mind
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      variant="body2"
                      align="left"
                      className="title"
                    >
                      Clore Leadership presents the second in a new series
                      'Leading from a Distance'. We are asking cultural leaders,
                      facilitators and trainers who contribute to our programmes
                      to share with the sector at large ideas, tips, tools and
                      strategies for leading effectively amidst current
                      uncertainties.
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="left"
                      className="author"
                    >
                      Youtube
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      marginLeft: "auto",
                      paddingRight: "20px",
                      order: 1,
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <Modal
                      vidId={item.vidId}
                      buttonClass="playssButton"
                    ></Modal>
                    <button className="addPlaylist">
                      <img src={add} alt="add to playlist"></img>
                    </button>
                  </Box>
                </Card>
              ))}
            </TabPanel>
            <TabPanel value="tribal" className="SeeAllSubsContainer">
              {TribalDancesList.map((item) => (
                <Card class="resCard">
                  <Box sx={{ width: 500, height: 220 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 400, height: 220, border: "none" }}
                      src={item.image}
                      alt="Live from space album cover"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="left"
                      className="ContListenTitle"
                    >
                      Leading from a Distance with Farooq Chaudhry OBE |
                      Questions Dancing through my Mind
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      variant="body2"
                      align="left"
                      className="title"
                    >
                      Clore Leadership presents the second in a new series
                      'Leading from a Distance'. We are asking cultural leaders,
                      facilitators and trainers who contribute to our programmes
                      to share with the sector at large ideas, tips, tools and
                      strategies for leading effectively amidst current
                      uncertainties.
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="left"
                      className="author"
                    >
                      Youtube
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      marginLeft: "auto",
                      paddingRight: "20px",
                      order: 1,
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <Modal
                      vidId={item.vidId}
                      buttonClass="playssButton"
                    ></Modal>
                    <button className="addPlaylist">
                      <img src={add} alt="add to playlist"></img>
                    </button>
                  </Box>
                </Card>
              ))}
            </TabPanel>
          </div>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
