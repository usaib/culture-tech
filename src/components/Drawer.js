import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import WriteIcon from '@mui/icons-material/RateReview';
import TvIcon from '@mui/icons-material/LiveTvSharp';
import HelpIcon from '@mui/icons-material/HelpOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Explore from '@mui/icons-material/Explore';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


export const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: "#eee",
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  export default function DrawerH({handleDrawerClose, open}) {
    const theme = useTheme();
    
    return (
      <Box sx={{ display: 'flex',  }}>
        <CssBaseline />
        <Drawer 
          variant="permanent" 
          open={open} 
          sx = {{
            backgroundColor: "#fff", 
            flexDirection: "column", 
            mr: 5
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx = {{ 
                  backgroundColor: "#fff",
                  paddingTop: `calc(2em + ${theme.spacing(10)})`}}>
            <ListItem>
              <Link to={"/"}>
              <ListItemIcon>
                <Home sx = {{color: "#2A3D53"}}/> 
              </ListItemIcon>
              </Link>
              <ListItemText primary={"Home"}/>
            </ListItem>
            <ListItem>
              <Link to={"/"}>
              <ListItemIcon>
                <Explore sx = {{color: "#2A3D53"}}/> 
              </ListItemIcon>
              </Link>
              <ListItemText primary={"Explore"}/>
            </ListItem>
              <ListItem button>
                <Link to={"/podcasts"}>
                <ListItemIcon>
                  <WriteIcon sx = {{color: "#2A3D53"}}/>  
                </ListItemIcon>
                </Link>
                <ListItemText primary={"Podcast"} />
              </ListItem>
              <ListItem button>
                <Link to={"/documentaries"}>
                <ListItemIcon>  
                  <TvIcon sx = {{color: "#2A3D53"}}/>
                </ListItemIcon>
                </Link>
                <ListItemText primary={"Documentaries"} />
              </ListItem>
          </List>
          <List sx = {{ 
                  backgroundColor: "#fff", 
                  paddingTop: `calc(2em + ${theme.spacing(12)})`}}>
            <ListItem>
            <Link to={"/"}>
              <ListItemIcon>
                <HelpIcon sx = {{color: "#2A3D53"}}/> 
              </ListItemIcon>
              </Link>
              <ListItemText primary={"MAIL"}/>
            </ListItem>
            <ListItem>
            <Link to={"/"}>
              <ListItemIcon>
                <SettingsIcon sx = {{color: "#2A3D53"}}/> 
              </ListItemIcon>
              </Link>
              <ListItemText primary={"MAIL"}/>
            </ListItem>
              <ListItem button>
              <Link to={"/"}>
                <ListItemIcon>
                  <UserIcon  sx = {{color: "#2A3D53"}}/>  
                </ListItemIcon>
                </Link>
                <ListItemText primary={"text"} />
              </ListItem>
          </List>
        </Drawer>
      </Box>
    );
  }
  