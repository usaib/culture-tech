import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import { Pagination } from '@mui/material';

import Header from "../components/Header"
import DrawerH from "../components/Drawer"
import Feature from "../components/Feature"
import Featured from '../components/FeaturedVideos';
import ContinueWatching from '../components/ContinueWatching';
import AllDocumentaries from '../components/Alldocs';


import featureArray from "../data/featureData"
import featureVideos from "../data/featuredVideos"
import allDocs from '../data/allDocs';
import Footer from '../components/Footer';

export default function Documentry(){

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log('true')
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return(
        <Box sx={{backgroundColor: "#333444"}}>
          <Header handleDrawerOpen={handleDrawerOpen} open={open} />
          <DrawerH handleDrawerClose={handleDrawerClose} open={open}/>
          <Box component="main" sx={{ flexGrow: 1, pl: 5}}>
            <Box 
              component={'div'} 
              sx={{ 
                height: '80vh', 
                display: 'flex', 
                flexDirection: "column", 
                justifyContent: "center", 
                textAlign: "center", 
                backgroundImage: `url(images/image2.png)`,
              }}
            >
              <Typography
                variant="h3"
                noWrap
                sx={{
                  color: "#fff",
                  fontWeight: 'bold',
                  fontSize: "5rem" 
                }}
              >
                Documentaries
              </Typography>
            </Box>
            <Box 
              component={'div'} 
              sx={{ 
                height: '60vh', 
                display: 'flex', 
                flexDirection: "row", 
                justifyContent: "space-evenly", 
                textAlign: "center", 
                backgroundImage: `url(images/image5.png)`,
              }}
            >
              {featureArray.map((item, key) => (
                <Feature feature={item} key={key} />
              ))}
            </Box>
            <Box 
              component={'div'}
              sx={{
                margin: 2,
                padding: 2,
              }}
            >
              <Typography 
                variant='h2' 
                sx={{ 
                  textAlign: 'left', 
                  fontWeight: '400', 
                  color: 'white', 
                  ml: 5, 
                  textTransform: "capitalize", 
                  fontWeight: "700",                  
                  fontSize: '5rem'
                }}
              >
                Featured
              </Typography>
            </Box>
            <Box 
              sx={{
                ml: 4,
                pl: 3,
                background: `url(images/skarduImage.jpg)`    
              }}
            >
            <Carousel 
              animation='slide'
              duration={1500}
              navButtonsAlwaysVisible 
              indicatorIconButtonProps={{ style: { color: "#111", fontSize: 'large' }}}
              activeIndicatorIconButtonProps={{ style: { color: "#666", fontSize: 20 }}}
              navButtonsProps={{ style: {backgroundColor: "transparent", fontSize: 50}}}
            >
                {featureVideos.map((item, key) => (
                  <Featured featurevideo={item} key={key} />
                ))}
            </Carousel>
            </Box>
            <Box
              sx={{
                margin: 2,
                padding: 2,
              }}
            >
              <Typography 
                variant='h2' 
                sx={{ 
                  textAlign: 'left', 
                  fontWeight: '400', 
                  color: 'white', 
                  ml: 5, 
                  textTransform: "capitalize", 
                  
                  fontSize: '4rem'
                }}
              >
                Continue Watching
              </Typography>
              <ContinueWatching />
            </Box>
            <Box
              sx={{
                margin: 2,
                padding: 2,
              }}
            >
              <Typography 
                variant='h2' 
                sx={{ 
                  textAlign: 'left', 
                  fontWeight: '400', 
                  color: 'white', 
                  ml: 5, 
                  textTransform: "capitalize", 
                  fontWeight: '700',                  
                  fontSize: '4rem'
                }}
              >
                All Documentaries
              </Typography>
              <Pagination count={4} shape="rounded" color='secondary' 
                sx={{
                  dispaly: 'flex',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  ml: '40%',
                }} 
              />
              <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              {allDocs.map(( item, key ) => (
                <AllDocumentaries alldocs={item} key={key} />
              ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              {allDocs.map(( item, key ) => (
                <AllDocumentaries alldocs={item} key={key} />
              ))}
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
    )
}