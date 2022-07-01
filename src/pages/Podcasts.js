import React, { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import TopPods from "../components/TopPods";
import Footer from "../components/Footer";
import ContListen from "../components/ContListen";
import LiveSession from "../components/LiveSession";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import { Helmet } from "react-helmet";

function Podcasts() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  return (
    <div>
      <Helmet>
        <title>Podcasts | DancePakistan</title>
      </Helmet>
      <ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
      <Drawer open={drawerOpen} />
      <Fragment>
        <Header
          title={"INSIGHTS"}
          image={require("../Images/podcast-header.jpg")}
        />
        <TopPods></TopPods>
        <ContListen></ContListen>
        <LiveSession></LiveSession>
        <Footer />
      </Fragment>
    </div>
  );
}

export default Podcasts;
