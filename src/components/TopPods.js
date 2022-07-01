import "./TopPods.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Modal from "./videoModal";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import "react-modal-video/scss/modal-video.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "react-modal-video/scss/modal-video.scss";
import img1 from "../assets/talk_1.jpg";
import img2 from "../assets/talk_2.jpg";
import img3 from "../assets/talk_3.jpg";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    body1: {
      fontSize: 14,
    },
  },
});

const useStyles = makeStyles({
  cardConf: {
    width: 220,
    height: 400,
    display: "inline-block",
    borderRadius: "30px",
    backgroundColor: "black",
  },
  podcastImage: {
    width: 220,
    height: 150,
    border: "none",
  },
});

let podcastData = {
  category: "Podcasts",
  data: [
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_2.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_3.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 1,
      title: "Power of a single decision ",
      image: require("../assets/talk_1.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "42-I4V9ymYs",
      author: "Nighat Chaodhary",
    },
    {
      id: 2,
      title: "Dancing the Female Body in Pakistan",
      image: require("../assets/talk_2.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "pdInEBhUAKU",
      author: "Zara Noor Abbas",
    },
  ],
};

const someTitle = "Podcast";

const TopPods = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="topPods">
        <div
          style={{
            border: "0.5px Solid white",
            margin: "20px",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
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
              <Link
                to="/SeeAll"
                state={{ data: podcastData, title: someTitle }}
              >
                SeeMore
              </Link>
            </Typography>
          </div>
          <Splide
            options={{
              rewind: true,
              gap: "6rem",
              perPage: 3,
            }}
          >
            <SplideSlide>
              <Card
                className={classes.cardConf}
                sx={{ borderRadius: "15px", backgroundColor: "black" }}
              >
                <div>
                  <CardMedia
                    component="img"
                    className={classes.podcastImage}
                    src={img1}
                    alt="Live from space album cover"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    align="left"
                    className="title"
                  >
                    Dancing the Female Body in Pakistan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
                    Nighat Chaodhary
                  </Typography>
                </CardContent>
                <Modal vidId="42-I4V9ymYs" buttonClass="playzy"></Modal>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card
                className={classes.cardConf}
                sx={{ borderRadius: "15px", backgroundColor: "black" }}
              >
                <div>
                  <CardMedia
                    component="img"
                    className={classes.podcastImage}
                    src={img2}
                    alt="Live from space album cover"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    className="title"
                  >
                    Power of a single decision
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
                    Zara Noor Abbas
                  </Typography>
                </CardContent>
                <Modal vidId="pdInEBhUAKU" buttonClass="playzy"></Modal>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card
                className={classes.cardConf}
                sx={{ borderRadius: "15px", backgroundColor: "black" }}
              >
                <div>
                  <CardMedia
                    component="img"
                    className={classes.podcastImage}
                    src={img3}
                    alt="Live from space album cover"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    className="title"
                  >
                    How technology has advanced feminism in Pakistan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
                    Ayesha Siddique Khan
                  </Typography>
                </CardContent>
                <Modal vidId="Vv6vBwNMfbU" buttonClass="playzy"></Modal>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card
                className={classes.cardConf}
                sx={{ borderRadius: "15px", backgroundColor: "black" }}
              >
                <div>
                  <CardMedia
                    component="img"
                    className={classes.podcastImage}
                    src={img3}
                    alt="Live from space album cover"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    className="title"
                  >
                    How technology has advanced feminism in Pakistan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
                    Ayesha Siddique Khan
                  </Typography>
                </CardContent>
                <Modal vidId="Vv6vBwNMfbU" buttonClass="playzy"></Modal>
              </Card>
            </SplideSlide>
            <SplideSlide>
              <Card
                className={classes.cardConf}
                sx={{ borderRadius: "15px", backgroundColor: "black" }}
              >
                {/* <div style={{position: 'relative', left: '0', top: '0'}}>
                            <img className='topPodsImage' src={img1}></img>
                            <button className='playButton'>
                            <img src={img2} style={{margin:'auto',width:"18px" ,height:"18px"}} ></img>
                            </button>
                        </div> */}
                <div>
                  <CardMedia
                    component="img"
                    className={classes.podcastImage}
                    src={img3}
                    alt="Live from space album cover"
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    className="title"
                  >
                    How technology has advanced feminism in Pakistan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left"
                    className="author"
                  >
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
