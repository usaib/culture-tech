import './Header.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { drawerWidth } from './Drawer';

const Header =( {handleDrawerOpen, open} )=>{

  const HeaderBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
    display: "flex",
    flexdirection: "row",
    backgroundColor: "#fff",
    alignItems: "space-between",
    color: "#222"
  }))

  const Search = styled('div')(({ theme }) => ({
    borderRadius:'30px',
    backgroundColor:'#C2C3C1',
    '&:hover': {
      backgroundColor:'#FCFCFC ' ,
      opacity: '0.8',
    },
    position: 'absolute',
    top: '16px',
    right: '16px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000000',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

return(
  <React.Fragment>
    <CssBaseline />
    <HeaderBar enableColorOnDark elevation={0}>
      <Toolbar>
        <Box 
          component={'div'}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Box sx={{
            display: "flex",
            alignSelf: "center",
          }}>
            <Typography 
              variant='h3'
              sx={{
                textAlign: 'center',
                position: 'absolute',
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                margin: '0 auto',
                color: "#F3A611"
              }}
            >
              Dance Pakistan
            </Typography>
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase 
                placeholder = "Search" 
                inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>
        </Box>
      </Toolbar>
    </HeaderBar>
    <Toolbar />
  </React.Fragment>
)
}

export default Header;


