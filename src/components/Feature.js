import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Stack } from "@mui/material";

import { IconButton } from "@mui/material";
import * as Icons from "@mui/icons-material";

export const Feature = ({ feature }) => {
	return (
		<Box component={"div"}>
			<Stack
				sx={{
					alignItems: "center",
					maxWidth: "250px",
					margin: { lg: "100px auto", xs: "50px auto" }
				}}
			>
				<IconButton>
					{React.createElement(Icons[feature.icon], {
						style: { fontSize: "1.5em", color: "white" }
					})}
				</IconButton>
				<Typography
					variant="h2"
					sx={{
						textAlign: "center",
						fontWeight: "400",
						color: "white",
						fontSize: "2em",
						fontFamily: "Poppins"
					}}
				>
					{feature.heading}
				</Typography>
				<Typography
					component={"p"}
					variant="body2"
					gutterBottom
					sx={{
						fontFamily: "Poppins",
						textAlign: "center",
						fontSize: "1em",
						fontWeight: "400",
						pt: 2,
						color: "white"
					}}
				>
					{feature.description}
				</Typography>
			</Stack>
		</Box>
	);
};
