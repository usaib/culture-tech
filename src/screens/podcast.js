import { Fragment, useState } from 'react';
import Header from '../components/Header';
import TopPods from '../components/TopPods';
import ContListen from '../components/ContListen';
import LiveSession from '../components/LiveSession';
import DrawerH from '../components/Drawer';
import Footer from '../components/Footer';
import { Box } from '@mui/system';
import { drawerWidth } from "../components/Drawer";
import { CssBaseline } from '@mui/material';

export default function Podcast() {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    console.log('true')
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Box>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <DrawerH handleDrawerClose={handleDrawerClose} open={open}/>
      <TopPods />
      <ContListen />
      <LiveSession />
      <Footer />
      </Box>
    </Fragment>

  );
}

