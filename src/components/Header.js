import "./Header.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
	const Search = styled("div")(({ theme }) => ({
		borderRadius: "30px",
		backgroundColor: "#C2C3C1",
		"&:hover": {
			backgroundColor: "#FCFCFC ",
			opacity: "0.8"
		},
		position: "absolute",
		top: "16px",
		right: "16px",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	}));

	const SearchIconWrapper = styled("div")(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: "#000000",
		"& .MuiInputBase-input": {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "12ch",
				"&:focus": {
					width: "20ch"
				}
			}
		}
	}));

	return (
		<div>
			<div className="myheader">
				<img
					className="headerimg"
					src={require("../Images/image 10.png")}
				></img>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
			</div>
		</div>
	);
};

export default Header;
