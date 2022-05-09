import React from "react";
import {
	Container,
	Grid,
	CssBaseline,
	Typography,
	Box,
	Stack,
	List,
	ListItem,
	Link
} from "@mui/material";
import Footer from "../components/Footer";
import { Feature } from "../components/Feature";
import { Featured } from "../components/FeaturedVideos";
import { AllDocumentaries } from "../components/Alldocs";
import {
	DocumentaryImages,
	featureData,
	featuredVideos,
	allDocs
} from "../styles/homepageStyles";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from "react-helmet";
import "swiper/css/pagination";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Documentry() {
	const [drawerOpen, setDrawerOpen] = React.useState(true);
	const toggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};
	return (
		<React.Fragment>
			<Helmet>
				<title>Documentries | DancePakistan </title>
			</Helmet>
			<Box sx={{ display: "flex", overflow: "hidden", padding: 0, margin: 0 }}>
				<ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
				<Drawer open={drawerOpen} />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						width: "auto",
						padding: 0,
						margin: 0,
						paddingLeft: 0,
						paddingRight: 0
					}}
				>
					<CssBaseline />
					<Container
						maxWidth="1800px"
						sx={{
							padding: "70px 0 0 0",
							marginLeft: 0,
							margin: 0,
							paddingLeft: 0,
							paddingRight: 0,
							["@media (min-width:600px)"]: {
								// eslint-disable-line no-useless-computed-key
								padding: 0,
								paddingTop: "70px"
							}
						}}
					>
						<Box
							component={"div"}
							sx={{
								minHeight: "550px",
								position: "relative",
								backgroundImage: `url(${DocumentaryImages[0]})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundColor: "rgba(0,0,0,0.6)",
								backgroundBlendMode: "darken"
							}}
						>
							<Typography
								variant="h3"
								noWrap
								sx={{
									color: "#fff",
									fontWeight: "500",
									fontSize: "2.5em ",
									fontFamily: "Poppins",
									position: "absolute",
									top: "50%",
									left: "50%",
									textTransform: "uppercase",
									transform: "translate(-50%,-50%)"
								}}
							>
								Documentaries
							</Typography>
						</Box>
					</Container>
					<Container
						maxWidth="1800px"
						sx={{
							marginLeft: 0,
							["@media (min-width:600px)"]: {
								// eslint-disable-line no-useless-computed-key
								padding: 0
							}
						}}
					>
						<Box
							sx={{
								backgroundImage: `url(${DocumentaryImages[1]})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundColor: "rgba(0,0,0,0.75)",
								backgroundBlendMode: "darken",
								backgroundRepeat: "no-repeat"
							}}
						>
							<Grid container sx={{ alignItems: "center" }}>
								{featureData.map((item, key) => (
									<Grid item lg={4} xs={12}>
										<Feature feature={item} key={key} />
									</Grid>
								))}
							</Grid>
						</Box>
					</Container>
					<Container
						maxWidth="lg"
						sx={{
							marginLeft: 0,
							["@media (min-width:600px)"]: {
								// eslint-disable-line no-useless-computed-key
								padding: 0
							}
						}}
					>
						<Stack sx={{ backgroundColor: "#1b1b1b" }}>
							<Box
								component={"div"}
								sx={{
									marginTop: "20px"
								}}
							>
								<Typography
									variant="h2"
									sx={{
										textAlign: "left",
										fontWeight: "400",
										color: "white",
										fontWeight: "500",
										marginLeft: "1em",
										fontFamily: "Poppins",
										fontSize: "2.5em"
									}}
								>
									Featured
								</Typography>
							</Box>
							<Grid container sx={{ marginTop: "20px" }}>
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									pagination={{
										dynamicBullets: true
									}}
									navigation={true}
									slidesPerView={1}
									autoplay={{
										delay: 3000,
										disableOnInteraction: true
									}}
								>
									{featuredVideos.map((item, key) => (
										<SwiperSlide key={key}>
											<Grid item xs={12}>
												<Featured featurevideo={item} key={key} />
											</Grid>
										</SwiperSlide>
									))}
								</Swiper>
							</Grid>
						</Stack>
					</Container>
					<Container
						maxWidth="lg"
						sx={{
							marginLeft: 0,
							["@media (min-width:600px)"]: {
								// eslint-disable-line no-useless-computed-key
								padding: 0
							}
						}}
					>
						<Stack
							sx={{
								backgroundColor: "#1b1b1b"
							}}
						>
							<Box
								component={"div"}
								sx={{
									marginTop: "20px",
									marginBottom: "20px"
								}}
							>
								<Typography
									variant="h2"
									sx={{
										textAlign: "left",
										color: "#fff",
										marginLeft: "1em",
										fontWeight: "500",
										fontFamily: "Poppins",
										fontSize: "2.5em"
									}}
								>
									All Documentaries
								</Typography>
							</Box>

							<Grid container>
								{allDocs.map((item, key) => (
									<Grid item lg={4} xs={12}>
										<AllDocumentaries alldocs={item} key={key} />
									</Grid>
								))}
							</Grid>
						</Stack>
					</Container>

					<Container
						maxWidth="1800px"
						sx={{
							backgroundColor: "#D16002",
							padding: "1em",

							marginLeft: { sm: "0", xl: "auto" }
						}}
					>
						<Grid container>
							<Grid item xs={12} sm={6}>
								<Typography
									sx={{ color: "#FFF", fontFamily: "Poppins", fontSize: "1em" }}
								>
									{" "}
									&copy; Dance Pakistan. All rights reserved
								</Typography>
							</Grid>
							<Grid xs={12} sm={6} item>
								<List
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										padding: "0",
										marginLeft: "auto",
										width: "fit-content",
										"& li": {
											padding: "0px 16px"
										}
									}}
								>
									<ListItem>
										<Link href="#">
											<FacebookRoundedIcon
												sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
											/>
										</Link>
									</ListItem>
									<ListItem>
										<Link href="#">
											<YouTubeIcon
												sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
											/>
										</Link>
									</ListItem>
									<ListItem>
										<Link href="#">
											<TwitterIcon
												sx={{ color: "#fff", "&:hover": { color: "#f3a611" } }}
											/>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
		</React.Fragment>
	);
}
