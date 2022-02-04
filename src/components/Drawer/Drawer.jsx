import React, { useContext } from "react";
import makeStyles from "./styles";
import clsx from "clsx";
import { Drawer, List } from "@mui/material";
import DrawerList from "./DrawerList";
import Cart from "./carts.png";
import User from "./man.png";
import Vendor from "./provision.png";
import { Home } from "@mui/icons-material";
import WriteIcon from "@mui/icons-material/RateReview";
import TvIcon from "@mui/icons-material/LiveTvSharp";
const vendorList = [
	{
		href: "/app/dashboard/home",
		icon: Home,
		title: "Home"
	},
	{
		href: "/app/dashboard/podcasts",
		icon: WriteIcon,
		title: "Podcasts"
	},
	{
		href: "/app/dashboard/liveSessions",
		icon: TvIcon,
		title: "Live Sessions"
	}
];
function DrawerWrapper({ open }) {
	const role = localStorage.getItem("role");
	const classes = makeStyles();

	const renderSideBar = (role) => {
		if (role == "admin") {
			return vendorList.map((sidebar) => {
				return (
					<DrawerList
						href={sidebar.href}
						key={sidebar.title}
						title={sidebar.title}
						icon={sidebar.icon}
						isSidebarOpen={open}
					/>
				);
			});
		} else {
			return vendorList.map((sidebar) => {
				return (
					<DrawerList
						href={sidebar.href}
						key={sidebar.title}
						title={sidebar.title}
						icon={sidebar.icon}
						isSidebarOpen={open}
					/>
				);
			});
		}
	};
	return (
		<div>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.paper]: true,
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
				}}
			>
				<div className={classes.DrawerListItems}></div>
				<List>{renderSideBar(role)}</List>
			</Drawer>
		</div>
	);
}

export default DrawerWrapper;
