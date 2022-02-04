import * as React from 'react';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Modal from './videoModal';
import './ContListen.css'
import './TopPods.css'

const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });

const ContListen =() =>{
return(
    <ThemeProvider theme={theme}>
    <div className='ContListenMain'>
        <div className='contContainer'>
            <div style={{height:"70px"}}>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px",float:"left"}} >
                Interviews
                </Typography>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                See All
                </Typography>
            </div>  
            <div>
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe"  sx={{ width: 500 ,height:250 ,border:"none"}} image="https://www.youtube.com/embed/fM5h1wUxeLc" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        Dancing the Female Body in Pakistan 
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                        Farooq Chaudhry, co-founder and Producer of Akram Khan Company, plays a key role in forming innovative business models to support Akram Khan's artistic ambitions as well as 
                        offering creative support during the development of Khan's projects.At the Time and Performance Masterclass, our Head of Research Emma Birchall interviewed Farooq asking him
                         about the importance of giving constructive feedback instead of 'mollycoddling' students. 
                        </Typography>
                         <Typography variant="body1" align="left" className='author'>
                         Youtube
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',float:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="fM5h1wUxeLc" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src="images/cherry.jpg" alt="add to playlist"></img>
                    </button>
                    </Box>
                </Card>
                
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe"  sx={{ width: 500 ,height:250 ,border:"none"}} image="https://www.youtube.com/embed/G7Co9AgvZ3w" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        Leading from a Distance with Farooq Chaudhry OBE | Questions Dancing through my Mind
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                        Clore Leadership presents the second in a new series 'Leading from a Distance'. We are asking cultural leaders, 
                    facilitators and trainers who contribute to our programmes to share with the sector at large ideas, tips,
                     tools and strategies for leading effectively amidst current uncertainties. 
                        </Typography>
                         <Typography variant="body1" align="left" className='author'>
                         Youtube
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',float:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="G7Co9AgvZ3w" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src='images/cherry.jpg' alt="add to playlist"></img>
                    </button>
                    </Box>
                </Card>
                
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe" controls sx={{ width: 500 ,height:250 ,border:"none"}} src="https://player.vimeo.com/video/670086956?h=5730515a45" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        Hunza
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                            Hunza Valley
                        </Typography>
                         <Typography variant="body1" align="left" className='author'>
                         Youtube
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',float:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="670086956?h=5730515a45" channel="vimeo" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src='images/cherry.jpg' alt="add to playlist"></img>
                    </button>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe" sx={{ width: 500 ,height:250 ,border:"none"}} image="https://www.youtube.com/embed/MX1uDVN_XQo" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        Khaas Mulaqat
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                        An Interview With Nighat Chaodhry
                   </Typography>
                         <Typography variant="body1" align="left" className='author'>
                         Nighat Chaudhary
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',float:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="MX1uDVN_XQo" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src='images/cherry.jpg' alt="add to playlist"></img>
                    </button>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe" sx={{ width: 500 ,height:250 ,border:"none"}} image="https://www.youtube.com/embed/8mVYZKte3Ao" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        Interview of Classical Dancer
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                        Exclusive Interview of Classical Dancer Nighat Chaudhry | Good Morning With Dr Ejaz Waris |KN                        </Typography>
                         <Typography variant="body1" align="left" className='author'>
                         Dr. Ejaz Waris
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',float:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="8mVYZKte3Ao" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src='images/cherry.jpg' alt="add to playlist"></img>
                    </button>
                    </Box>
                 
                </Card>
                
                <Card sx={{ display: 'flex', margin: "30px" ,backgroundColor: "black"}}>
                <Box sx={{ width: 500 ,height:250 }}>
                <CardMedia component="iframe" sx={{ width: 500 ,height:250 ,border:"none"}} image="https://www.youtube.com/embed/42-I4V9ymYs" alt="Live from space album cover" />
                </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="left" className='title'>
                        International Business Festival 2018
                        </Typography>
                        <Typography gutterBottom component="div" align="left" className='title'>
                        Farooq Chaudhry, Executive Producer at Akram Khan Company, talks to the Culture Diary on the Innovation Hub stand at International Business Festival 2018.
                        </Typography>
                         <Typography variant="body1" align="left" className='author'>
                            The Culture Diary
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center',align:"right", marginLeft: "auto", paddingRight:"20px",order: 1,pl: 1, pb: 1}}>
                    <Modal vidId="42-I4V9ymYs" buttonClass="playssButton"></Modal>
                    <button className='addPlaylist'>
                            <img src='images/cherry.jpg' alt="add to playlist"></img>
                    </button>
                    </Box>
                   
                </Card>
            </div>
        </div>
    </div>
    </ThemeProvider>
)
}

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
//                             <img src={img3} alt="add to playlist"></img>
//                             </button>
//                         </div>
//                     </div>
//                 </div>