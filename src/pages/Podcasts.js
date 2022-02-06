import React, { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import TopPods from "../components/TopPods";
import ContListen from "../components/ContListen";
import LiveSession from "../components/LiveSession";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";

function Podcasts() {
	const [drawerOpen, setDrawerOpen] = useState(true);
	const toggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};
	return (
		<div>
			<ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
			<Drawer open={drawerOpen} />
			<Fragment>
				<Header></Header>
				<TopPods></TopPods>
				<ContListen></ContListen>
				<LiveSession></LiveSession>
			</Fragment>
		</div>
	);
}

export default Podcasts;
