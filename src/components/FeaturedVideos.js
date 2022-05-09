import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { Add, PlayArrowOutlined } from "@mui/icons-material";

export const Featured = ({ featurevideo }) => {
	return (
		<Stack
			component={"div"}
			sx={{
				minHeight: "500px",
				justifyContent: "center",
				backgroundImage: `url(${featurevideo.imag})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundColor: "rgba(0,0,0,0.75)",
				backgroundBlendMode: "darken",
				backgroundRepeat: "no-repeat"
			}}
		>
			<Box sx={{ marginLeft: { xs: "60px" } }}>
				<Typography
					variant="h1"
					sx={{
						textAlign: "left",
						color: "white",
						textTransform: "capitalize",
						fontWeight: "600",
						fontSize: "2.2em",
						marginBottom: "15px",
						fontFamily: "Volkhov"
					}}
				>
					{featurevideo.heading}
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						fontSize: "1rem",
						fontWeight: "400",
						maxWidth: { lg: "500px", xs: "400px" },
						display: " -webkit-box",
						WebkitLineClamp: "5",
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						marginBottom: "15px"
					}}
				>
					{featurevideo.description}
				</Typography>
				<Stack
					sx={{
						flexDirection: "row",
						justifyContent: "flex-start",
						alignItems: "center",
						marginBottom: "15px"
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							color: "#fff",
							fontWeight: "600"
						}}
					>
						Posted:
					</Typography>
					<Typography
						sx={{
							color: "green",
							fontWeight: "500",
							marginLeft: "10px"
						}}
					>
						{featurevideo.date}
					</Typography>
				</Stack>
				<Stack
					sx={{
						flexDirection: "row",
						justifyContent: "flex-start"
					}}
				>
					<Button
						variant="contained"
						startIcon={<PlayArrowOutlined fontSize="large" />}
						sx={{
							backgroundColor: "#fff",
							color: "#222",
							borderRadius: 2,
							fontSize: "1em",
							"&:hover": {
								color: "#fff",
								backgroundColor: "#D16002"
							}
						}}
					>
						Play Now
					</Button>
					<Button
						variant="contained"
						startIcon={<Add />}
						sx={{
							backgroundColor: "#aaa",
							color: "222",
							borderRadius: 0,
							fontSize: "1em",
							marginLeft: "15px",
							"&:hover": {
								color: "#fff",
								backgroundColor: "#D16002"
							}
						}}
					>
						Add to wishlist
					</Button>
				</Stack>
			</Box>
		</Stack>
	);
};
