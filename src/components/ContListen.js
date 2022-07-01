import "./ContListen.css";
import "./TopPods.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import add from "../Images/Vector.png";
import img1 from "../Images/int_1.jpg";
import img2 from "../Images/int_2.jpg";
import img3 from "../Images/int_3.jpg";
import img4 from "../Images/int_4.jpg";
import img5 from "../Images/int_5.jpg";
import Modal from "./videoModal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    body2: {
      fontSize: 14,
    },
    h5: {
      fontSize: 22,
    },
  },
});

const someList = {
  category: "Descriptive Podcasts",
  data: [
    {
      id: 1,
      title: "Dancing the Female Body in Pakistan",
      image: require("../Images/int_1.jpg"),
      vidId: "fM5h1wUxeLc",
      title: "Dancing the Female Body in Pakistan",
      detail:
        "Farooq Chaudhry, co-founder and Producer of Akram Khan Company, plays a key role in forming innovative business models to support Akram Khan's artistic ambitions as well as offering creative support during the development of Khans projects.At the Time and Performance Masterclass, our Head of Research Emma Birchall interviewed Farooq asking him about the importance of giving constructive feedback instead of 'mollycoddling' students.",
      author: "Youtube",
    },
    {
      id: 2,
      title:
        "Leading from a Distance with Farooq Chaudhry OBE | Questions Dancing through my Mind",
      image: require("../Images/int_2.jpg"),
      link: "https:/293489023i4092kdmls",
      vidId: "",
      title:
        "Leading from a Distance with Farooq Chaudhry OBE | Questions Dancing through my Mind",
      detail:
        "Clore Leadership presents the second in a new series 'Leading from a Distance'. We are asking cultural leaders, facilitators and trainers who contribute to our programmes to share with the sector at large ideas, tips, tools and strategies for leading effectively amidst current uncertainties.",
      author: "Youtube",
    },
  ],
};

const ContListen = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="ContListenMain">
        <div className="contContainer">
          <div style={{ height: "70px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "left" }}
            >
              Interviews
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "20px", float: "right" }}
            >
              <Link to="/SeeAll" state={{ data: someList }}>
                SeeMore
              </Link>
            </Typography>
            {/* <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                See All
                </Typography> */}
          </div>
          <div>
            <Card class="resCard">
              <Box sx={{ width: 500, height: 220 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 220, border: "none" }}
                  src={img1}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  Dancing the Female Body in Pakistan
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  Farooq Chaudhry, co-founder and Producer of Akram Khan
                  Company, plays a key role in forming innovative business
                  models to support Akram Khan's artistic ambitions as well as
                  offering creative support during the development of Khan's
                  projects.At the Time and Performance Masterclass, our Head of
                  Research Emma Birchall interviewed Farooq asking him about the
                  importance of giving constructive feedback instead of
                  'mollycoddling' students.
                </Typography>
                <Typography variant="subtitle2" align="left" className="author">
                  Youtube
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal vidId="fM5h1wUxeLc" buttonClass="playssButton"></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>

            <Card class="resCard">
              <Box sx={{ width: 500, height: 220 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 220, border: "none" }}
                  src={img2}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  Leading from a Distance with Farooq Chaudhry OBE | Questions
                  Dancing through my Mind
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  Clore Leadership presents the second in a new series 'Leading
                  from a Distance'. We are asking cultural leaders, facilitators
                  and trainers who contribute to our programmes to share with
                  the sector at large ideas, tips, tools and strategies for
                  leading effectively amidst current uncertainties.
                </Typography>
                <Typography variant="subtitle2" align="left" className="author">
                  Youtube
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal vidId="G7Co9AgvZ3w" buttonClass="playssButton"></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>

            <Card class="resCard">
              <Box sx={{ width: 400, height: 220 }}>
                <CardMedia
                  component="iframe"
                  controls
                  sx={{ width: 400, height: 220, border: "none" }}
                  src="https://player.vimeo.com/video/670086956?h=5730515a45"
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  Hunza
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  Hunza Valley
                </Typography>
                <Typography variant="subtitle2" align="left" className="author">
                  Youtube
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal
                  vidId="670086956?h=5730515a45"
                  channel="vimeo"
                  buttonClass="playssButton"
                ></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>
            <Card class="resCard">
              <Box sx={{ width: 400, height: 220 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 220, border: "none" }}
                  src={img5}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  Khaas Mulaqat
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  An Interview With Nighat Chaodhry
                </Typography>
                <Typography variant="subtitle2" align="left" className="author">
                  Nighat Chaudhary
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal vidId="MX1uDVN_XQo" buttonClass="playssButton"></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>
            <Card class="resCard">
              <Box sx={{ width: 500, height: 220 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 220, border: "none" }}
                  src={img4}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  Interview of Classical Dancer
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  Exclusive Interview of Classical Dancer Nighat Chaudhry | Good
                  Morning With Dr Ejaz Waris |KN{" "}
                </Typography>
                <Typography align="left" variant="subtitle2" className="author">
                  Dr. Ejaz Waris
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal vidId="8mVYZKte3Ao" buttonClass="playssButton"></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>

            <Card class="resCard">
              <Box sx={{ width: 500, height: 220 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 220, border: "none" }}
                  src={img3}
                  alt="Live from space album cover"
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  className="ContListenTitle"
                >
                  International Business Festival 2018
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  variant="body2"
                  align="left"
                  className="title"
                >
                  Farooq Chaudhry, Executive Producer at Akram Khan Company,
                  talks to the Culture Diary on the Innovation Hub stand at
                  International Business Festival 2018.
                </Typography>
                <Typography variant="subtitle2" align="left" className="author">
                  The Culture Diary
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  float: "right",
                  marginLeft: "auto",
                  paddingRight: "20px",
                  order: 1,
                  pl: 1,
                  pb: 1,
                }}
              >
                <Modal vidId="42-I4V9ymYs" buttonClass="playssButton"></Modal>
                <button className="addPlaylist">
                  <img src={add} alt="add to playlist"></img>
                </button>
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContListen;

// <div className='contCard'>
//                     {/* <img src={img} className='contImg'></img> */}
//                     <div>
//                     <iframe width="400" height="250" src="https://www.youtube.com/embed/42-I4V9ymYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                     </div>
//                     <div className="cardContent">
//                         <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
//                         International Business Festival 2018
//                         </Typography>
//                         <Typography sx={{float:"left" }}>
//                         Farooq Chaudhry, Executive Producer at Akram Khan Company, talks to the Culture Diary on the Innovation Hub stand at International Business Festival 2018.
//                          <Typography variant="body1" align="left" className='author'>
//                             The Culture Diary
//                         </Typography>
//                         </Typography>
//                         <div className='cardButtons'>
//                             <Modal vidId="42-I4V9ymYs" buttonClass="playssButton"></Modal>
//                             <button className='addPlaylist'>
//                             <img src={add} alt="add to playlist"></img>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
