import React, { useState } from "react";
import {
	Container,
	Grid,
	CssBaseline,
	Typography,
	Box,
	Button,
	Paper,
	Stack,
	List,
	ListItem,
	Link
} from "@mui/material";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EastIcon from "@mui/icons-material/East";
import ElevateAppBar from "../components/Appbar";
import { Drawer } from "../components/Drawer";
import {
	useStyles,
	carouselImages,
	blogCards,
	cards,
	Documentaries,
	cultureImages,
	podcards,
	pricingCards,
	footerLinks
} from "../styles/homepageStyles";
import { Footer } from "../components/Footer";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Helmet } from "react-helmet";
export const Homepage = () => {
	const classes = useStyles();
	const [drawerOpen, setDrawerOpen] = useState(true);
	const toggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<Helmet>
				<title>Home | DancePakistan</title>
			</Helmet>
			<ElevateAppBar toggleDrawer={toggleDrawer} isDrawerOpen={drawerOpen} />
			<Drawer open={drawerOpen} />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${180}px)` },
					padding: "0"
				}}
			>
				<CssBaseline />

				<Container
					maxWidth="lg"
					sx={{
						minHeight: "550px",
						paddingTop: "100px",
						paddingBottom: "100px",

						marginLeft: { sm: "0", xl: "auto" }
					}}
				>
					<Grid container sx={{ alignItems: "center" }}>
						<Grid item lg={5} xs={12}>
							<Box component="div" className={classes.leftHead}>
								<Fade top>
									<Typography className={classes.headingOne} component="h2">
										Expreience The Way Of Life
									</Typography>

									<Typography className={classes.paragraph} component="span">
										Danse World is a virtual association between a group of
										performing and fitness arts professionals and an information
										resource centre for all teachers, professionals, and
										students.
									</Typography>
								</Fade>
								<Fade left>
									<Button variant="contained" className={classes.homeBtn}>
										Discover <EastIcon sx={{ marginLeft: "5px" }} />
									</Button>
								</Fade>
							</Box>
						</Grid>
						<Grid item lg={7} xs={12} sx={{ position: "relative" }}>
							<Fade right>
								<Box>
									<Swiper
										modules={[Pagination, Autoplay]}
										autoplay={{
											delay: 2500,
											disableOnInteraction: true
										}}
										pagination={{
											dynamicBullets: true,
											clickable: true
										}}
										spaceBetween={5}
										slidesPerView={1}
										breakpoints={{
											1024: {
												slidesPerView: 1.2,
												spaceBetween: 20
											}
										}}
									>
										{carouselImages.map((img) => (
											<SwiperSlide>
												<Box sx={{ height: "530px" }}>
													<Paper
														elevation={0}
														className={classes.carouselImage}
														sx={{ background: `url(${img})` }}
													/>
												</Box>
											</SwiperSlide>
										))}
									</Swiper>
								</Box>
							</Fade>
						</Grid>
					</Grid>
				</Container>
				<Container
					maxWidth="lg"
					sx={{ marginBottom: "30px", position: "relative" }}
				>
					<Fade left>
						<Box
							sx={{
								position: "absolute",
								top: "-30px",
								left: "10%",
								transform: "translateX(-10%)",
								height: "50px",
								width: "50px",
								borderRadius: "25px",
								border: "1px solid rgba(237, 112, 20, 0.81)",
								background: "transparent",
								transform: "rotate(-30deg)",
								"&:before": {
									position: "absolute",
									right: "25%",
									transform: "translateX(-25%)",
									content: "''",
									height: "50px",
									width: "50px",
									borderRadius: "25px",
									border: "1px solid rgba(237, 112, 20, 0.81)",
									background: "transparent"
								}
							}}
						/>
					</Fade>
					<Grid container>
						<Grid item xs={12}>
							<Fade bottom>
								<Stack
									sx={{
										maxWidth: "600px",
										marginRight: "auto",
										marginLeft: "auto",
										position: "relative",
										"&:before": {
											position: "absolute",
											top: "-40px",
											left: "25%",
											transform: "translateX(-25%)",
											backgroundColor: "#D16002",
											content: "''",
											height: "15px",
											width: "15px",
											border: "1px solid #D16002",
											borderRadius: "7.5px"
										}
									}}
								>
									<Typography
										sx={{
											fontFamily: "Poppins",
											fontSize: "1em",
											fontWeight: "500",
											color: "#5E6282",
											textTransform: "uppercase",
											width: "fit-content",
											margin: "0 auto 20px auto"
										}}
									>
										Category
									</Typography>
									<Typography
										sx={{
											textTransform: "capitalize",
											fontFamily: "Volkhov",
											fontSize: "1.75em",
											fontWeight: "700",
											color: "rgba(20,24,62,0.93)",
											width: "fit-content",
											margin: "0 auto 0 auto"
										}}
									>
										What we have for you
									</Typography>
								</Stack>
							</Fade>
						</Grid>
						<Grid item xs={12}>
							<Grid container className={classes.cardsContainer}>
								<Slide bottom>
									{cards.map((card) => (
										<Grid
											item
											md={4}
											lg={2}
											xs={12}
											sm={6}
											sx={{
												position: "relative",
												marginBottom: "50px",
												marginTop: "50px"
											}}
											key={card.title}
										>
											{/* documentry aur podcast k card ko route karwa dena unke
                      pages pe */}
											<Link href="#" sx={{ textDecoration: "none" }}>
												<Paper className={classes.card} elevation={0}>
													<Stack spacing={2}>
														<Paper
															elevation={0}
															sx={{
																background: `url(${card.image})`,
																backgroundRepeat: "no-repeat",
																backgroundSize: "50px",
																height: "80px",
																backgroundPosition: "center center"
															}}
														/>
														<Typography className={classes.cardTitle}>
															{card.title}
														</Typography>
														<Typography className={classes.cardDes}>
															{card.description}
														</Typography>
													</Stack>
												</Paper>
											</Link>
											{/* <Paper className={classes.backCard} elevation={0}></Paper> */}
										</Grid>
									))}
								</Slide>
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<Slide bottom>
					<Container
						maxWidth="lg"
						sx={{
							backgroundColor: "#1B1E23",
							marginTop: "30px",
							padding: "30px 10px",
							marginLeft: { sm: "0", xl: "auto" }
						}}
					>
						<Typography
							sx={{
								textTransform: "capitalize",
								fontFamily: "Volkhov",
								fontSize: "1.75em",
								fontWeight: "700",
								color: "#fff",
								width: "fit-content"
							}}
						>
							Documentaries
						</Typography>
						<Swiper
							modules={[Navigation, Pagination]}
							pagination={{
								dynamicBullets: true
							}}
							navigation={true}
							spaceBetween={10}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 10
								},
								1024: {
									slidesPerView: 3.2,
									spaceBetween: 10
								}
							}}
						>
							<Grid container sx={{ justifyContent: "space-around" }}>
								{Documentaries.map((doc) => (
									<SwiperSlide key={doc.title}>
										<Grid item xs={12}>
											<Paper
												elevation={0}
												className={classes.docCard}
												sx={{ background: `url(${doc.image})` }}
											>
												<Box className={classes.docInfo}>
													<Typography
														component="h2"
														sx={{
															fontFamily: "Open Sans",
															fontWeight: "800",
															letterSpacing: "0.7px",
															fontSize: "1.75em",
															textTransform: "uppercase"
														}}
													>
														{doc.title}
													</Typography>
													<Typography
														className={classes.cardDes}
														sx={{
															color: "#fff !important",
															textAlign: "justify !important",
															display: " -webkit-box",
															WebkitLineClamp: "3",
															WebkitBoxOrient: "vertical",
															overflow: "hidden"
														}}
													>
														{doc.description}
													</Typography>

													<Button
														variant="contained"
														sx={{
															backgroundColor: "transparent",
															color: "#fff",
															border: "2px solid #fff",
															height: "60px",
															padding: "0",
															marginTop: "10px",
															borderRadius: "30px",
															transition: "all 0.3s ease-in-out",
															"&:hover": {
																background: "#D16002"
															}
														}}
													>
														<PlayArrowIcon />
													</Button>
												</Box>
											</Paper>
										</Grid>
									</SwiperSlide>
								))}
							</Grid>
						</Swiper>
					</Container>
				</Slide>
				<Container
					maxWidth="lg"
					sx={{
						marginTop: "30px",
						padding: "30px 10px"
					}}
				>
					<Fade left>
						<Typography
							sx={{
								textTransform: "capitalize",
								fontFamily: "Volkhov",
								fontSize: "1.75em",
								fontWeight: "700",
								color: "rgba(20,24,62,0.93)",
								width: "fit-content",
								margin: "0 auto 0 auto",
								position: "relative",
								"&:after": {
									content: "''",
									position: "absolute",
									bottom: "0",
									right: "-30px",
									backgroundColor: "#D16002",
									height: "10px",
									width: "85px",
									transform: "rotate(-13deg)",
									clipPath: "polygon(0 18%,90% 0, 100% 100%)"
								}
							}}
						>
							Publications & Blogs
						</Typography>
					</Fade>
					<Grid
						container
						sx={{ justifyContent: "space-around", alignItems: "center" }}
					>
						<Slide bottom>
							{blogCards.map((blog) => (
								<Grid item lg={4} md={6} xs={12}>
									<Paper
										elevation={0}
										className={classes.blogCard}
										sx={{ background: `url(${blog.image})` }}
									>
										<Box className={classes.blogInfo}>
											<Typography
												sx={{
													color: "#1e1d4c",
													textAlign: "left",
													display: " -webkit-box",
													WebkitLineClamp: "3",
													WebkitBoxOrient: "vertical",
													overflow: "hidden",
													fontWeight: "600",
													fontSize: "0.9em",
													marginBottom: "10px",
													letterSpacing: "0.7px"
												}}
											>
												{blog.description}
											</Typography>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													justifySelf: "flex-end"
												}}
											>
												<Typography
													sx={{
														fontWeight: "700",
														fontSize: "0.8em",
														color: "#D16002",
														textTransform: "uppercase",
														letterSpacing: "0.9px"
													}}
												>
													{blog.title}
												</Typography>
												<Typography
													sx={{
														color: "#c4c4c4",
														fontSize: "0.8em",
														fontWeight: "500"
													}}
												>
													{blog.PublishDate}
												</Typography>
											</Box>
										</Box>
									</Paper>
								</Grid>
							))}
						</Slide>
					</Grid>
				</Container>
				<Container
					maxWidth="lg"
					sx={{
						marginTop: "30px",
						padding: "30px 10px",
						position: "relative"
					}}
				>
					<Fade right>
						<Box
							sx={{
								position: "absolute",
								top: "10px",
								right: "20%",
								transform: "translateX(-20%)",
								height: "50px",
								width: "50px",
								borderRadius: "25px",
								border: "1px solid rgba(237, 112, 20, 0.81)",
								background: "transparent",
								transform: "rotate(-30deg)",
								"&:before": {
									position: "absolute",
									right: "25%",
									transform: "translateX(-25%)",
									content: "''",
									height: "50px",
									width: "50px",
									borderRadius: "25px",
									border: "1px solid rgba(237, 112, 20, 0.81)",
									background: "transparent"
								}
							}}
						/>
					</Fade>

					<Grid
						container
						sx={{ justifyContent: "center", alignItems: "center" }}
					>
						<Grid
							item
							xs={12}
							lg={5}
							order={{ xs: 2, lg: 1 }}
							marginBottom={20}
						>
							<Zoom bottom>
								<Paper
									elevation={0}
									sx={{
										height: "530px",
										width: { md: "400px", xs: "350px" },
										background: "F4f4f4",
										maxWidth: "400px",
										borderTopRightRadius: "350px",
										borderTopLeftRadius: "350px",
										borderBottomRightRadius: "15px",
										borderBottomLeftRadius: "15px",
										marginLeft: "auto",
										marginRight: "auto",
										position: "relative",

										"&:before": {
											position: "absolute",
											content: "''",
											width: { md: "430px", xs: "380px" },
											height: "300px",
											backgroundColor: "transparent",
											top: "-30px",
											left: "-15px",
											border: "2px solid #D16002",
											borderTopRightRadius: "300px",
											borderTopLeftRadius: "300px",
											borderBottom: "none"
										}
									}}
								>
									<Swiper
										modules={[Pagination, Autoplay, EffectFade]}
										style={{ height: "560px" }}
										effect={"fade"}
										autoplay={{
											delay: 2500,
											disableOnInteraction: true
										}}
										pagination={{
											dynamicBullets: true,
											clickable: true
										}}
									>
										{cultureImages.map((img) => (
											<SwiperSlide>
												<Box
													sx={{
														backgroundSize: "cover !Important",
														backgroundRepeat: "no-repeat !important",
														background: `url(${img})`,
														width: "100%",
														height: "530px",
														borderTopRightRadius: "350px",
														borderTopLeftRadius: "350px",
														borderBottomRightRadius: "15px",
														borderBottomLeftRadius: "15px",
														objectFit: "cover"
													}}
												></Box>
											</SwiperSlide>
										))}
									</Swiper>
								</Paper>
							</Zoom>
						</Grid>
						<Grid item xs={12} lg={7} order={{ xs: 1, lg: 2 }}>
							<Stack
								className={classes.margin}
								sx={{
									maxWidth: "600px",
									marginRight: "auto",
									marginLeft: "auto",
									position: "relative",
									"&:before": {
										position: "absolute",
										top: "-30px",
										left: "-30px",
										backgroundColor: " #D16002",
										content: "''",
										height: "15px",
										width: "15px",
										border: "1px solid #D16002",
										borderRadius: "7.5px"
									}
								}}
							>
								<Fade top>
									<Typography
										sx={{
											color: "#D16002",
											fontSize: "1em",
											fontWeight: "700",
											letterSpacing: "1px",
											fontFamily: "Poppins",
											lineHeight: "2.5",
											textTransform: "uppercase"
										}}
									>
										Cultures and Folks
									</Typography>
								</Fade>
								<Fade bottom>
									<Typography
										sx={{
											color: "#14183E",
											fontSize: { md: "2.5em", xs: "1.75em" },
											fontWeight: "700",
											letterSpacing: "0.8px",
											fontFamily: "Volkhov",
											lineHeight: "1.3",
											marginBottom: "20px"
										}}
										variant="h2"
									>
										Make a Love Story Between you and History
									</Typography>
								</Fade>
								<Fade bottom>
									<Typography
										sx={{
											color: "#5E6282",
											fontSize: "1.1em",
											fontWeight: "300",
											letterSpacing: "1px",
											fontFamily: "Poppins",
											lineHeight: "1.85",
											textAlign: "left"
										}}
									>
										Being cultural custodian, we will archive regional and
										national culture and folks as well as bring the hidden and
										lost talents to the surface and provide recognition to them
										by making documentaries, managing creative tourism etc
									</Typography>
								</Fade>
							</Stack>
						</Grid>
					</Grid>
				</Container>
				<Container
					maxWidth="lg"
					sx={{
						backgroundColor: "#1B1E23",
						padding: "30px 10px",
						marginLeft: { sm: "0", xl: "auto" }
					}}
				>
					<Grid container>
						<Grid item xs={12} md={4}>
							<Stack sx={{ marginBottom: "20px" }}>
								<Typography
									sx={{
										textTransform: "capitalize",
										fontFamily: "Volkhov",
										fontSize: "1.75em",
										fontWeight: "700",
										color: "#fff",
										width: "fit-content"
									}}
								>
									Talks & Live Sessions
								</Typography>
								<Box className={classes.podSec} />
							</Stack>
						</Grid>
						<Grid item xs={12} md={8}>
							<Swiper
								modules={[Navigation]}
								navigation={true}
								spaceBetween={10}
								slidesPerView={1}
								breakpoints={{
									769: {
										slidesPerView: 2.4,
										spaceBetween: 0
									},
									512: {
										slidesPerView: 1.4,
										spaceBetween: 0
									}
								}}
							>
								<Grid container sx={{ justifyContent: "space-around" }}>
									{podcards.map((pod) => (
										<SwiperSlide>
											<Grid item xs={12}>
												<Paper className={classes.podCard}>
													<Box
														sx={{
															height: "200px",
															width: "210px",
															background: "#c4c4c4",
															borderRadius: "15px",
															marginBottom: "15px",
															position: "relative",
															backgroundImage: `url(${pod.image})`,
															backgroundSize: "cover",
															backgroundPosition: "center ",
															backgroundRepeat: "no-repeat"
														}}
													>
														<Button
															sx={{
																position: "absolute",
																bottom: "20px",
																right: "20px",
																height: "50px",
																width: "50px",
																background: "#fff",
																borderRadius: "15px",
																display: "flex",
																alignItems: "center",
																justifyContent: "center",
																transition: "background 0.3s ease-in-out",
																cursor: "pointer",
																"&:hover": {
																	background: "rgba(237, 112, 20, 0.81)"
																}
															}}
															href={pod.link}
														>
															<PlayArrowIcon sx={{ color: "#D16002" }} />
														</Button>
													</Box>
													<Typography
														className={classes.cardDes}
														sx={{
															WebkitLineClamp: "2",
															textAlign: "center",
															fontFamily: "Open Sans !important",
															fontWeight: "600 !important",
															textAlign: "left",
															marginBottom: "10px",
															marginLeft: "17px"
														}}
													>
														{pod.description}
													</Typography>
													<Typography
														sx={{
															color: "#c4c4c4",
															fontSize: "0.8em",
															fontWeight: "500",
															alignSelf: "flex-start",
															marginLeft: "17px"
														}}
													>
														{pod.author}
													</Typography>
												</Paper>
											</Grid>
										</SwiperSlide>
									))}
								</Grid>
							</Swiper>
						</Grid>
					</Grid>
				</Container>
				<Container
					maxWidth="lg"
					sx={{
						backgroundColor: "rgb(96, 169, 255)",
						padding: { md: "1.5em 0em ", xs: "1.5em 0em !important" },
						marginLeft: { sm: "0", xl: "auto" }
					}}
				>
					<Typography
						sx={{
							margin: "0 auto 15px auto",
							color: "#fff",
							textTransform: "capitalize",
							fontFamily: "Volkhov",
							fontSize: "1.75em",
							fontWeight: "700",
							width: "fit-content"
						}}
					>
						Membership
					</Typography>
					<Paper
						elevation={0}
						sx={{
							backgroundColor: "#fff",
							borderRadius: "12px",
							height: "auto",
							maxWidth: "970px",
							margin: "0 auto",
							padding: "15px 25px"
						}}
					>
						<Grid container>
							{pricingCards.map((card) => (
								<Grid item md={4} xs={12} key={card.planName}>
									<Stack
										className={classes.priceCard}
										sx={{
											borderRight: {
												md:
													card.planName !== "Enterprise"
														? "1px solid #e1f1ff"
														: "none",
												xs: "none"
											},
											borderBottom: {
												lg: "none",
												xs:
													card.planName !== "Enterprise"
														? "1px solid #e1f1ff !important"
														: "none"
											}
										}}
									>
										<Box
											sx={{
												height: "150px",
												width: "220px",
												marginBottom: "25px",
												background: `url(${card.planIcon})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "100%",
												backgroundPosition: "center"
											}}
										/>
										<Typography
											sx={{
												fontWeight: "600",
												fontSize: "16px",
												color: "#888"
											}}
										>
											{card.planName}
										</Typography>

										<List
											sx={{
												margin: " 50px 0 25px",
												textAlign: "center",
												color: "#016ff9"
											}}
										>
											{card.planFeatures.map((feature) => (
												<ListItem className={classes.planfeature}>
													{feature}
												</ListItem>
											))}
										</List>
										<Typography
											component="span"
											sx={{
												color: "#016ff9",
												display: "block",
												fontSize: "32px",
												fontWeight: "700",
												fontFamily: "Open Sans"
											}}
										>
											{card.planPrice}
										</Typography>

										<Button
											className={classes.planSubBtn}
											sx={{
												backgroundColor:
													card.planName !== "Small Team"
														? "transparent"
														: "#48aaff",
												color:
													card.planName !== "Small Team"
														? "#348efe"
														: "#fff !important",
												"&:hover":
													card.planName == "Small Team"
														? { backgroundColor: "#269aff" }
														: {}
											}}
										>
											{card.planBtn}
										</Button>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Paper>
				</Container>
				<Container
					maxWidth="1800px"
					sx={{
						marginTop: "40px",
						padding: { md: "1.5em 1em " }
					}}
				>
					<Grid container>
						<Grid item xs={12} md={4}>
							<Stack>
								<Typography
									sx={{
										fontFamily: "The Nautigal,cursive !important",
										fontSize: "4em",
										letterSpacing: "1.05px !Important",
										color: "#F3A611"
									}}
								>
									Dance Pakistan
								</Typography>
								<Typography
									className={classes.paragraph}
									sx={{ fontSize: "1em !important", textAlign: "justify" }}
								>
									{" "}
									Danse World will be committed to providing the best education
									and educators available while also providing an environment
									that will foster new initiatives and unions.
								</Typography>
							</Stack>
						</Grid>
						{footerLinks.map((item) => (
							<Grid item md={2} sm={3} xs={12}>
								<Stack sx={{ alignItems: { md: "center", xs: "flex-start" } }}>
									<Typography
										sx={{
											fontFamily: "Poppins",
											fontSize: "1.2em",
											color: "#D16002",
											fontWeight: "bold"
										}}
									>
										{item.secTitle}
									</Typography>
									<List className={classes.footerLinks}>
										{item.Links.map((link) => (
											<ListItem>
												<Link href="#">{link}</Link>
											</ListItem>
										))}
									</List>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Container>
				<Container
					maxWidth="1800px"
					sx={{
						marginTop: "20px",
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
	);
};
