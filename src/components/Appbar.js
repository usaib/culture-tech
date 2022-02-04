import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useStyles } from "../styles/homepageStyles";
import { ArrowBack } from "@mui/icons-material";

function ElevationScroll(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

export default function ElevateAppBar(props) {
	const { toggleDrawer, isDrawerOpen } = props;
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position="fixed" className={classes.header}>
					<Toolbar className={classes.toolbar}>
						<Typography
							variant="h3"
							noWrap
							component="div"
							className={classes.Logo}
						>
							Dance Pakistan
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
	);
}
