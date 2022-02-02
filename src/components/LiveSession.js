import "./LiveSession.css"
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });

const LiveSession =() =>{
return(
    <ThemeProvider theme={theme}>
    <div className='LiveSessionMain'>
        <div className='LiveContainer'>
            <div>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'red', padding:"20px",float:"left" ,display:"flex"}} >
                <div style={{backgroundColor:"green", borderRadius:"30px",width:"2px" ,height:"20px" ,margin:"5px"}} ></div>
                Live Sessions
                </Typography>
            </div>  
            {/* <div>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/52zd5S7CcBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>     */}
            <CardMedia component="iframe" sx={{ width:"100%" ,height:500 ,border:"none",marginTop:"40px"}} image="https://www.youtube.com/embed/52zd5S7CcBo" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:500 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/42-I4V9ymYs" alt="Live from space album cover" />
        </div>
    </div>
    </ThemeProvider>
)
}

export default LiveSession;