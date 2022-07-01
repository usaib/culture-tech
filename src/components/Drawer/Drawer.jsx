import React, { useContext } from "react";
import makeStyles from "./styles";
import clsx from "clsx";
import { Divider, Drawer, List } from "@mui/material";
import DrawerList from "./DrawerList";
import Cart from "./carts.png";
import User from "./man.png";
import Vendor from "./provision.png";
import { Home } from "@mui/icons-material";
import WriteIcon from "@mui/icons-material/RateReview";
import TourIcon from '@mui/icons-material/Tour';
import MicIcon from '@mui/icons-material/Mic';
import TvIcon from "@mui/icons-material/LiveTvSharp";
import HelpIcon from "@mui/icons-material/HelpOutlineRounded";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { matchPath, useLocation, Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../../assets/logo.jpeg";
const list = [
  {
    href: "/",
    icon: Home,
    title: "Home",
  },
  {
    href: "/app/podcasts",
    icon: WriteIcon,
    title: "Podcasts",
  },
  {
    href: "/Documentries",
    icon: TvIcon,
    title: "Documentries",
  },
  {
    href: "/healthandfitness",
    icon: DirectionsRunIcon,
    title: "Fitness",
  },
  {
    href: "/app/DanceTourism",
    icon: TourIcon,
    title: "DanceTourism",
  },
  {
    href: "/DanceTourism",
    icon: TourIcon,
    title: "TopDanceTourism",
  },
  {
    href: "/virtualStudio",
    icon: MicIcon,
    title: "VirtualStudio",
  }
];
function DrawerWrapper({ open }) {
  const classes = makeStyles();
  const location = useLocation();
  const isLinkActive = "/AboutUs"
    ? !!matchPath(
        {
          path: "/AboutUs",
          end: false,
        },
        location.pathname
      )
    : false;

  const renderSideBar = () => {
    return list.map((sidebar) => {
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
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.paper]: true,
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <img src={logo}></img>
        <div className={classes.DrawerListItems}></div>

        <List>{renderSideBar()}</List>
        <List
          sx={{
            backgroundColor: "#fff",
            marginTop: 10,
          }}
        >
          <ListItem
            className={classes.link}
            component={Link}
            to={"/AboutUs"}
            classes={{
              root: classnames(classes.linkRoot, {
                [classes.linkActive]: isLinkActive,
              }),
            }}
            disableRipple
            button
          >
            <ListItemIcon
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive,
              })}
            >
              <HelpIcon sx={{ color: "#2A3D53" }} />
            </ListItemIcon>

            <ListItemText
              classes={{
                primary: classnames(classes.linkText, {
                  [classes.linkTextActive]: isLinkActive,
                  [classes.linkTextHidden]: !true,
                }),
              }}
              primary={"About Us"}
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerWrapper;
