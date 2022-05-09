import * as React from "react";
import {
	Card,
	CardHeader,
	Typography,
	CardMedia,
	CardContent,
	CardActions
} from "@mui/material";

export const AllDocumentaries = ({ alldocs }) => {
	return (
		<Card
			sx={{
				maxWidth: "340px",
				bgcolor: "#333333",
				borderRadius: 3,
				margin: "20px auto"
			}}
		>
			<CardMedia
				component="img"
				height="194"
				image={alldocs.image}
				sx={{ borderRadius: 3 }}
			/>
			<Typography
				sx={{
					color: "#fff",
					padding: "16px 16px 0 16px",
					fontFamily: "Volkhov",
					fontWeight: "600",
					fontSize: "1.5em"
				}}
			>
				{alldocs.heading}
			</Typography>
			<CardContent>
				<Typography variant="body2" sx={{ color: "white", mb: 2 }}>
					{alldocs.description}
				</Typography>
				<Typography variant="span" sx={{ color: "white", fontWeight: "600" }}>
					Posted
				</Typography>
				<Typography
					variant="span"
					sx={{
						color: "yellowgreen",
						fontWeight: "400",
						ml: 2
					}}
				>
					{" "}
					{alldocs.date}
				</Typography>
			</CardContent>
		</Card>
	);
};
