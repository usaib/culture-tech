import "./TopPods.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "./videoModal";
import "react-modal-video/scss/modal-video.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "react-modal-video/scss/modal-video.scss";

const theme = createTheme({
	typography: {
		fontFamily: "Poppins"
	}
});

const TopPods = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="topPods">
				<div style={{ borderRadius: "10px", padding: "30px" }}>
					<div style={{ height: "70px" }}>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ color: "white", padding: "20px", float: "left" }}
						>
							Talks
						</Typography>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ color: "white", padding: "20px", float: "right" }}
						>
							See More
						</Typography>
					</div>
					<Splide
						options={{
							rewind: true,
							gap: "6rem",
							perPage: 3
						}}
					>
						<SplideSlide>
							<Card
								sx={{
									width: 400,
									height: 700,
									display: "inline-block",
									borderRadius: "15px",
									backgroundColor: "black"
								}}
							>
								{/* <div style={{position: 'relative', left: '0', top: '0'}}>
                                <img className='topPodsImage' src={img1}></img>
                                <button className='playButton'>
                                <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                                </button>
                            </div> */}
								<div>
									<iframe
										width="400"
										height="315"
										src="https://www.youtube.com/embed/V7yF3LV6vZ0"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										align="left"
										className="title"
									>
										Dancing the Female Body in Pakistan
									</Typography>
									<Typography variant="body1" align="left" className="author">
										Nighat Chaodhary
									</Typography>
								</CardContent>
								<Modal
									className="modalB"
									vidId="V7yF3LV6vZ0"
									buttonClass="playzy"
								></Modal>
							</Card>
						</SplideSlide>
						<SplideSlide>
							<Card
								sx={{
									width: 400,
									height: 700,
									display: "inline-block",
									borderRadius: "15px",
									backgroundColor: "black"
								}}
							>
								{/* <div style={{position: 'relative', left: '0', top: '0'}}>
                            <img className='topPodsImage' src={img1}></img>
                            <button className='playButton'>
                            <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                            </button>
                        </div> */}
								<div>
									<iframe
										width="400"
										height="315"
										src="https://www.youtube.com/embed/pdInEBhUAKU"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										align="left"
										className="title"
									>
										Power of a single decision
									</Typography>
									<Typography variant="body1" align="left" className="author">
										Zara Noor Abbas
									</Typography>
								</CardContent>
								<Modal vidId="pdInEBhUAKU" buttonClass="playzy"></Modal>
							</Card>
						</SplideSlide>
						<SplideSlide>
							<Card
								sx={{
									width: 400,
									height: 700,
									display: "inline-block",
									borderRadius: "15px",
									backgroundColor: "black"
								}}
							>
								{/* <div style={{position: 'relative', left: '0', top: '0'}}>
                            <img className='topPodsImage' src={img1}></img>
                            <button className='playButton'>
                            <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                            </button>
                        </div> */}
								<div>
									<iframe
										width="400"
										height="315"
										src="https://www.youtube.com/embed/Vv6vBwNMfbU"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										align="left"
										className="title"
									>
										How technology has advanced feminism in Pakistan
									</Typography>
									<Typography variant="body1" align="left" className="author">
										Ayesha Siddique Khan
									</Typography>
								</CardContent>
								<Modal vidId="Vv6vBwNMfbU" buttonClass="playzy"></Modal>
							</Card>
						</SplideSlide>
						<SplideSlide>
							<Card
								sx={{
									width: 400,
									height: 700,
									display: "inline-block",
									borderRadius: "15px",
									backgroundColor: "black"
								}}
							>
								{/* <div style={{position: 'relative', left: '0', top: '0'}}>
                            <img className='topPodsImage' src={img1}></img>
                            <button className='playButton'>
                            <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                            </button>
                        </div> */}
								<div>
									<iframe
										width="400"
										height="315"
										src="https://www.youtube.com/embed/Vv6vBwNMfbU"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										align="left"
										className="title"
									>
										How technology has advanced feminism in Pakistan
									</Typography>
									<Typography variant="body1" align="left" className="author">
										Ayesha Siddique Khan
									</Typography>
								</CardContent>
								<Modal vidId="Vv6vBwNMfbU" buttonClass="playzy"></Modal>
							</Card>
						</SplideSlide>
						<SplideSlide>
							<Card
								sx={{
									width: 400,
									height: 700,
									display: "inline-block",
									borderRadius: "15px",
									backgroundColor: "black"
								}}
							>
								{/* <div style={{position: 'relative', left: '0', top: '0'}}>
                            <img className='topPodsImage' src={img1}></img>
                            <button className='playButton'>
                            <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                            </button>
                        </div> */}
								<div>
									<iframe
										width="400"
										height="315"
										src="https://www.youtube.com/embed/Vv6vBwNMfbU"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										align="left"
										className="title"
									>
										How technology has advanced feminism in Pakistan
									</Typography>
									<Typography variant="body1" align="left" className="author">
										Ayesha Siddique Khan
									</Typography>
								</CardContent>
								<Modal vidId="Vv6vBwNMfbU" buttonClass="playzy"></Modal>
							</Card>
						</SplideSlide>
					</Splide>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default TopPods;
