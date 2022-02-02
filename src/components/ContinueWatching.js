import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, IconButton, Slider } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { height } from '@mui/system';

export default function CotinueWatching(){
    return(
      <Box 
        component={'div'}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          maxWidth: "100%",
          maxHeight: 'inherit',
          margin: 2,
          backgroundColor: "111",
          border: 1,
          borderColor: "#F3A611"
        }}
      >
        <Box 
          sx={{
            background: 'url(images/skarduImage.jpg)',
            borderRadius: 5,
            height: '80vh'
          }}>
            <Typography 
              variant='h2' 
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                pl: '5%',
                pt: '5%'
              }}
            >
              |Hotels in Skardu
            </Typography>
            <Typography 
              variant='bo dy2' 
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                pl: '6%',
                pt: '3%',
                pr: '15%',
                fontSize: '2.4em'
              }}
            >
              Hotel Mountain Lodge Skardu features a restaurant, free bikes.....
            </Typography>
        </Box>
        <Box 
          component={'div'}
          sx={{
            display: 'flex',
            p: 3,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <IconButton 
            sx={{
              backgroundColor: "#999",
              borderRadius: 2,
              color: "#F3A611"
            }}>
            <PlayArrow fontSize='large'/>
          </IconButton>
          <Box sx={{
            backgroundColor: "#999",
            width: "100%",
            justifyContent: 'center',
            alignItem: 'center',
            ml: 5,
            borderRadius: 3
          }}>
            <Divider 
              sx={{
                alignSelf: 'center', 
                border: 4, 
                borderRadius: 3, 
                borderColor: "#fff",
                mt: 2,
                ml: 3,
                mr: 3,
                maxWidth: '90%'
              }}
            />
            <Divider 
              sx={{
                alignSelf: 'center', 
                border: 5, 
                borderRadius: 3, 
                borderColor: "#f3a611",
                mt: -1,
                ml: 3,
                mb: "0.5rem",
                maxWidth: '70%'
              }}
            />
          </Box>
        </Box>
      </Box>
    )
}
